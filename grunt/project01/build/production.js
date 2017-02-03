/*==========================================================

    Game of Life
    A cellular automaton invented by John Conway.

    Developed by Caue Queiroz <cauenqueiroz@gmail.com>

    - App.js
    Control the general flow of the application.
    
    - Engine.js
    Control the core logic and the rules of the algorithm.

    - UI.js
    Control the UI (buttons and grid) and events.

========================================================= */

var App = {

    allowUser: true,

    status: 'pause',

    init: function() {    
        UI.init();
        Engine.init();
    },

    start: function() {
        App.status = 'running';
        App.allowUser = false;
        
        UI.enableButton('pause');
        UI.disableButton('clear');

        Engine.generateBoard();
        
        var run = setInterval(function() {
            if ( App.status !== 'running' ) {
                clearInterval(run);
            }

            Engine.generateNextBoard();
        }, 200);
    },

    pause: function() {
        if ( App.status === 'finish' ) {
            UI.disableButton('pause');
        }

        UI.enableButton('play');
        UI.enableButton('clear');

        App.status = 'pause';
        App.allowUser = true;        
    },

    clear: function() {
        Engine.clearBoard();

        UI.updateGrid();
        UI.disableButton('play');
    }

};

App.init();
/*==========================================================

    Engine.js
    Control the core logic and the rules of the algorithm.

========================================================= */
var Engine = {

    board: [],

    init: function() {
        this.generateBoard();
    },

    getBoard: function() {
        return this.board;
    },

    generateBoard: function() {
        var grid  = UI.$grid,
            board = [];
            line  = [];

        for ( var i=0; i<20; i++ ) {
            for ( var j=0; j<20; j++ ) {
                var elem = grid.querySelectorAll('.row')[i]
                               .querySelectorAll('.col')[j];

                line.push(elem.classList.contains('live') ? '1' : '0');
            }

            board.push(line);
            line = [];
        }

        this.board = board;
    },

    generateNextBoard: function() {
        var board     = this.board,
            nextBoard = [],
            line      = [];

        for ( var i=0; i<20; i++ ) {
            for ( var j=0; j<20; j++ ) {
                line.push(this.checkNeighbors(i, j) ? '1' : '0');
            }

            nextBoard.push(line);
            line = [];
        }

        if ( this.compareBoards(board, nextBoard) ) {
            App.status = 'finish';
            App.pause();
            return false;
        }

        this.board = nextBoard;
        UI.updateGrid();
    },

    checkNeighbors: function(row, col) {
        var board = this.board,
            cell  = board[row][col],
            ref   = [row, col];
            neighbors = [];

        neighbors.push(
            this.getNeighbor(ref, 'top', 'left'),
            this.getNeighbor(ref, 'top', 'center'),
            this.getNeighbor(ref, 'top', 'right'),
            this.getNeighbor(ref, 'center', 'left'),
            this.getNeighbor(ref, 'center', 'right'),
            this.getNeighbor(ref, 'bottom', 'left'),
            this.getNeighbor(ref, 'bottom', 'center'),
            this.getNeighbor(ref, 'bottom', 'right')
        );

        neighbors = neighbors.filter(function(elem) {
            return elem === '1';
        }).length;

        return (cell === '1')
            ? (neighbors < 2 || neighbors > 3) ? false : true
            : (neighbors === 3);
    },

    getNeighbor: function(ref, y, x) {
        var board = this.board,
            row = {
                'top': ref[0]-1,
                'center': ref[0],
                'bottom': ref[0]+1
            },
            col = {
                'left': ref[1]-1,
                'center': ref[1],
                'right': ref[1]+1
            };

        return board[row[y]] !== undefined ? board[row[y]][col[x]] : '0';
    },

    compareBoards: function(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    },

    clearBoard: function() {
        this.board = this.board.map(function(row) {
            return row.map(function(item) {
                return '0';
            });
        });
    }

};
/*==========================================================

    UI.js
    Control the UI (buttons and grid) and events.

========================================================= */
var UI = {
    
    $grid: document.querySelector('.grid-container'),
    
    $controls: document.querySelector('.controls'),

    init: function() {
        this.$grid.addEventListener('click', UI.draw, false);
        this.$controls.addEventListener('click', UI.userControl, false);
    },

    draw: function(e) {
        var elem = e.target.classList;

        if ( !App.allowUser || !elem.contains('col') ) return;        

        elem.toggle('live');

        UI.enableButton('clear');
        UI.enableButton('play');
    },

    userControl: function(e) {
        var elem = e.target.classList;

        if ( elem.contains('disabled') ) return;

        var actions = {
            'play': App.start,
            'pause': App.pause,
            'clear': App.clear
        };

        actions[elem.item(1)] ();
        elem.add('disabled');
    },

    enableButton: function(type) {
        this.$controls.querySelector('.'+type+'').classList.remove('disabled');
    },

    disableButton: function(type) {
        this.$controls.querySelector('.'+type+'').classList.add('disabled');
    },

    updateGrid: function() {
        var grid  = this.$grid,
            board = Engine.getBoard();

        for ( var i=0; i<20; i++ ) {
            for ( var j=0; j<20; j++ ) {
                var elem = grid.querySelectorAll('.row')[i]
                               .querySelectorAll('.col')[j]
                               .classList;

                if ( board[i][j] === '1' ) {

                    if ( !elem.contains('live') ) elem.add('live');

                } else {

                    if ( elem.contains('live') ) elem.remove('live');

                }
            }
        }
    }
};