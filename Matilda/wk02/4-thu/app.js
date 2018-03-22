var savBal = document.querySelector('.sav-bal');
var savInput = document.querySelector('.sav-input');
var savOut = document.querySelector('.sav-out');
var savIn = document.querySelector('.sav-in');

var chkBal = document.querySelector('.chk-bal');
var chkInput = document.querySelector('.chk-input');
var chkOut = document.querySelector('.chk-out');
var chkIn = document.querySelector('.chk-in');
/*
user enters amount into savInput
if user presses savOut, savBal - savInput
then savBal.textContent = newBal
if user presses savIn, savBal + savInput
then savBal.textContent = newBal
*/

var calcSavOut = function() {
  var newBal = Number(savBal.textContent) - Number(savInput.value);
  savBal.textContent = Math.round(newBal * 100) / 100;
  savInput.value = '';
  savInput.placeholder = '$';
}
var calcSavIn = function() {
  var newBal = Number(savBal.textContent) + Number(savInput.value);
  savBal.textContent = Math.round(newBal * 100) / 100;
  savInput.value = '';
  savInput.placeholder = '$';
}
var savRmPrompt = function() {
  savInput.placeholder = '';
}

savOut.addEventListener('click', calcSavOut);
savIn.addEventListener('click', calcSavIn);
savInput.addEventListener('click', savRmPrompt);

var calcChkOut = function() {
 var newBal = Number(chkBal.textContent) - Number(chkInput.value);
 chkBal.textContent = Math.round(newBal * 100) / 100;
 chkInput.value = '';
 chkInput.placeholder = '$';
}
var calcChkIn = function() {
  var newBal = Number(chkBal.textContent) + Number(chkInput.value);
  chkBal.textContent = Math.round(newBal * 100) / 100;
  chkInput.value = '';
  chkInput.placeholder = '$';

}
var chkRmPrompt = function() {
  chkInput.placeholder = '';
}

chkOut.addEventListener('click', calcChkOut);
chkIn.addEventListener('click', calcChkIn);
chkInput.addEventListener('click', chkRmPrompt);
