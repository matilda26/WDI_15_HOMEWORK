var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');
var resetBtn = document.querySelector('#reset');
var timerTxt = document.querySelector('#timer');

var timeNum = 0;
var isPaused = false;

function timer() {
  if(isPaused)
      return;
  timeNum++;
  timerTxt.innerHTML = 'Time elapsed: ' + timeNum;
  setTimeout(timer, 1000);
}

function stopTimer(){
  isPaused = true;
}
function startTimer(){
  isPaused = false;
  timer();
}
function resetTimer(){
  isPaused = true;
  timeNum = 0;
  timerTxt.innerHTML = 'Stop Watch';
}

resetBtn.addEventListener('click', function(e) {
  e.preventDefault();
  resetTimer();
})
pauseBtn.addEventListener('click', function(e) {
  e.preventDefault();
  stopTimer();
})
startBtn.addEventListener('click', function() {
  startTimer();
})
