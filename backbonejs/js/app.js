(function() {
  'use strict';

  var router; // The subviews set URLs to trigger actions

  var MenuItem = Backbone.Model.extend({
    defaults: {
      id: '',
      name: '',
      img: '',
      calories: 0,
      rating: 0,
      description: '',
      selected: false,
    },
    // The next two properties are used to construct the REST URL
    urlRoot: 'api/items', // will be combined with an ID
    id: 'id',
  });

  var MenuItemsCollection = Backbone.Collection.extend({
    model: MenuItem,
    currentSelection: null,
    url: 'api/items', // used for reading/writing the whole collection

    // Backbone expects an array from the server, but this can lead to
    // JSON hijacking.
    // See http://haacked.com/archive/2009/06/25/json-hijacking.aspx/
    // The easy fix is to override the parse method (called by fetch)
    // to extract the required information.
    parse: function(response) {
      return response.menu;
    },

    select: function(id) {
      // Note: Only one item will ever be selected
      var oldSelection = this.findWhere({selected: true});
      if (oldSelection) {
        if (oldSelection.get('id') === id) { return oldSelection; } // no change
        oldSelection.set('selected', false);
      }

      var newSelection = this.findWhere({id: (id)});
      if (newSelection) {
        newSelection.set('selected', true);
      }
      this.currentSelection = newSelection;
      return this.currentSelection;
    }

  });

  var MenuItemView = Backbone.View.extend({

    tagName: 'tr',

    events: {
      'click .select-item': 'selectItem'
    },

    initialize: function(item) {
      this.model = item;
      this.render();
    },

    selectItem: function(e) {
      e.preventDefault();
      router.navigate('select/' + this.model.id, {trigger: true});
    },

    template: _.template($('#menuItem-template').html(), {variable: 'menuItem'}),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  var SelectedItemView = Backbone.View.extend({
    el: '#selected-item',

    initialize: function() {
      this.select(null);
    },

    select: function(item) {
      this.model = item;
      this.render();
    },

    template: _.template($('#selectedItem-template').html(), {variable: 'menuItem'}),

    render: function() {
      var content = this.template(this.model ? this.model.attributes : null);
      this.$el.html(content);
      return this;
    }
  });

  var ItemDetailView = Backbone.View.extend({
    el: '#itemDetails-modal',

    events: {
      'click .select-item': 'selectItem'
    },

    template: _.template($('#itemDetails-template').html(), {variable: 'menuItem'}),

    initialize: function() {
      this.model = null;
    },

    show: function(item) {
      this.model = item;
      this.render();
      this.$el.modal({backdrop: true});
    },

    selectItem: function(e) {
      e.preventDefault();
      router.navigate('select/' + this.model.id, {trigger: true});
    },

    render: function() {
      if (this.model) {
        var content = this.template(this.model.attributes);
        this.$el.html(content);
      }
      return this;
    },

  });

  var FoodRouter = Backbone.Router.extend({
    routes: {
      'clear': 'clear',
      'select/:id': 'item',
      'detail/:id': 'detail'
    },

    clear: function() {
      Backbone.trigger('app:clearSelection');
    },

    item: function(id) {
      Backbone.trigger('app:select', id);
    },

    detail: function(id) {
      Backbone.trigger('app:showDetail', id);
    }
  });

  var AppView = Backbone.View.extend({

    el: '#app',

    initialize: function() {
      this.collection = new MenuItemsCollection();
      this.collection.fetch({success: _.bind(this._afterFetch, this)});

      Backbone.history.start();
    },

    _afterFetch: function() {
      this._buildUI();

      // Listen to messages from the router (moved from initialize)
      this.listenTo(Backbone, 'app:clearSelection', this.clearSelection);
      this.listenTo(Backbone, 'app:select', this.select);
      this.listenTo(Backbone, 'app:showDetail', this.showDetailPopup);

      // Listen for a change event from each model item (i.e. when
      // changing the selected item
      this.collection.each(function(item) {
        this.listenTo(item, 'change', this.onItemChange);
      }, this);
    },

    _buildUI: function() {
      var menu = $('#table-body');
      this.collection.each(function(item) {
        this.addMenuItem(menu, item);
      }, this);

      this.selectedItemView = new SelectedItemView();
      this.itemDetailView = new ItemDetailView();

      this.listenTo(Backbone, 'app:clearSelection', this.clearSelection);
      this.listenTo(Backbone, 'app:select', this.select);
      this.listenTo(Backbone, 'app:showDetail', this.showDetailPopup);
    },

    clearSelection: function() {
      this.select(null);
    },

    select: function(id) {
      var newSelection = this.collection.select(id);
      this.selectedItemView.select(newSelection);
    },

    showDetailPopup: function(id) {
      var item = this.collection.findWhere({id: (id)});
      if (!item) { return; }
      this.itemDetailView.show(item);
    },

    render: function() {
      return this; // all views will re-render on update
    },

    onItemChange: function(modelItem) {
      modelItem.save(); // post the changed model back to the server
    },

    addMenuItem: function(menu, item) {
      var menuItem = new MenuItemView(item);
      menu.append(menuItem.render().el);
    }

  });

  router = new FoodRouter();
  new AppView();

})();
