
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    if ( $('.bgimg').length ) $('.bgimg').remove();

    // 1) Google Streetview
    var user_info = $('#street').val() + ', ' + $('#city').val(),
        final_url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + user_info,
        greeting  = "Do you want to live in " + user_info;

    // Add background image
    $body.append('<img class="bgimg" src="'+final_url+'">');

    // Change greetings
    $greeting.text(greeting);

    // 2) New York Times
    var api_key = '47590ec2c0384787ac38f9fb866e8829',
        nyt_url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        nyt_url += '?' + $.param({ 'api-key': api_key, 'fq': user_info });

    $.getJSON(nyt_url, function( data ) {
      $nytHeaderElem.text('New York Times Articles for ' + user_info);
      var articles = data.response.docs;

      $.each(articles, function(key, item) {
        var title = item.headline.main,
            text  = item.lead_paragraph,
            link  = item.web_url;

        $nytElem.append("<li class='article'>\
          <a href='"+ link +"'>"+ title +"</a>\
          <p>"+ text +"</p>\
        </li>");
      });
    }).error(function() {
        $nytHeaderElem.text('Houston, we have a problem');
    });


    // 3) Wikipedia
    var wiki_url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ user_info;
        wiki_url += '&format=json&callback=wikiCallback';

    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text('failed to get wikipedia resources');
    }, 8000);
    $.ajax({
        url: wiki_url,
        dataType: 'jsonp',
        success: function( data ) {
            for ( var i=0; i<data[1].length; i++ ) {
                var title = data[1][i];
                var url   = data[3][i];

                $wikiElem.append('<li><a href="'+url+'">'+title+'</a></li>');
            }
            clearTimeout(wikiRequestTimeout);
        }
    })


    return false;
};

$('#form-container').submit(loadData);
