var colorSample = document.querySelector('.color-sample');
var colorSubmit = document.querySelector('.color-btn');


colorSubmit.addEventListener('click', function(event) {
  colorSample.style.backgroundColor = document.querySelector('.color-input').value;

})
