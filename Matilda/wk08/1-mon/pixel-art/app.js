var colorSample = document.querySelector('.color-sample');
var colorSubmit = document.querySelector('.color-btn');
var colorInput = document.querySelector('.color-input');


colorSubmit.addEventListener('click', function(event) {
  colorSample.style.backgroundColor = colorInput.value;
})

colorInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    colorSubmit.click();
  }
});

$canvas = $('<div>');
$canvas.addClass('canvas');
$('body').append($canvas);
var count = 0;
while (count < 3000) {
  $square = $('<div>');
  $square.addClass('square');
  $canvas.append($square);
  count++;
}

document.querySelectorAll('.square').forEach(function(indivSquare) {
  indivSquare.addEventListener('mouseover', function() {
    indivSquare.style.backgroundColor = colorInput.value;
  })
})

var movieInput = document.querySelector('.movie-input');
var movieSubmit = document.querySelector('.movie-btn');


movieSubmit.addEventListener('click', function(event) {
  var url = "http://omdbapi.com/?apikey=2f6435d9&t=" + movieInput.value;
  var options = {
    url: url,
    method: 'get'
  }
  $.ajax(options).done(function(res){
    $canvas.css("background-image", "url(" + res.Poster + ")");
  })
})
