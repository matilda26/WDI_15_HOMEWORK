var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var catWalk = function() {
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
var startCatWalk = function() {
  catTimer = window.setInterval(catWalk, delayMs);
}
