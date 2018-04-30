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
while (count < 99) {
  $square = $('<div>');
  $square.addClass('square');
  $canvas.append($square);
  count++;
}
