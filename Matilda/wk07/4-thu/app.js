var $search = $('.search-form');

var offsetCount = 0;

$search.on('click', function(event) {
    event.preventDefault();

    var options = {url: 'http://api.giphy.com/v1/gifs/search?q=' + $("input").val() + '&api_key=24UxURWXu2Qh8737x0sPX0ULej8UHWlw&limit=10&offset=' + offsetCount}


    var searchResults = function(res) {
        res.data.forEach(function(gif) {

            var $newLink = $('<a>');
            var $newImg = $('<img>');
            $newLink.attr('href', gif.url);
            $newImg.attr('src', gif.images.fixed_width.url);
            $newLink.append($newImg);
            $('.results').append($newLink);

        });

      var $scroll = $('<h3>');
      $scroll.text('scroll for more');
      $('.scroll').append($scroll);
    }

  $.ajax(options).done(searchResults);





  })

  var colors = [
    'blue',
    'white',
    'red',
    'green',
    'brown',
    'purple'
  ];

  var colorIndex = 0;
  window.addEventListener('scroll', throttle(callback, 1000));
  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  function callback() {
    // event.preventDefault();
    offsetCount += 10;

    var options = {url: 'http://api.giphy.com/v1/gifs/search?q=' + $("input").val() + '&api_key=24UxURWXu2Qh8737x0sPX0ULej8UHWlw&limit=10&offset=' + offsetCount}


    var searchResults = function(res) {
      res.data.forEach(function(gif) {

        var $newLink = $('<a>');
        var $newImg = $('<img>');
        $newLink.attr('href', gif.url);
        $newImg.attr('src', gif.images.fixed_width.url);
        $newLink.append($newImg);
        $('.results').append($newLink);

      })
    }

  $.ajax(options).done(searchResults);
  }
