
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // 1) Google Streetview
    var user_info = $('#street').val() + ',' + $('#city').val(),
        final_url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + user_info,
        greeting  = "Do you want to live in " + user_info;

    // Add background image
    if ( $('.bgimg').length ) $('.bgimg').remove();
    $body.append('<img class="bgimg" src="'+final_url+'">');

    // Change greetings
    $greeting.text(greeting);

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
