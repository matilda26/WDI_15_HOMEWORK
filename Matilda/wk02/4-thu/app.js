var savBal = document.querySelector('.sav-bal');
var savInput = document.querySelector('.sav-input');
var savOut = document.querySelector('.sav-out');
var savIn = document.querySelector('.sav-in');

var savBalMore = document.querySelector('.sav-bal-more');

var chkBal = document.querySelector('.chk-bal');
var chkInput = document.querySelector('.chk-input');
var chkOut = document.querySelector('.chk-out');
var chkIn = document.querySelector('.chk-in');

var left = document.querySelector('.lefthalf');
/*
user enters amount into savInput
if user presses savOut, savBal - savInput
then savBal.textContent = newBal
if user presses savIn, savBal + savInput
then savBal.textContent = newBal
- when money is added, move box down
- when money is subtracted, move box up
- when balance is more than 7 numbers, reduce font size
Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account
*/


var calcSavOut = function() {
  var newBal = Number(savBal.textContent) - Number(savInput.value);
  savBal.textContent = Math.round(newBal * 100) / 100;
  savInput.value = '';
  savInput.placeholder = '$';
  checkNegative();
}
var calcSavIn = function() {
  var newBal = Number(savBal.textContent) + Number(savInput.value);
  savBal.textContent = Math.round(newBal * 100) / 100;
  savInput.value = '';
  savInput.placeholder = '$';
  checkNegative();
  checkSize();
  // left.style.margin = "200px 0 0 0";
}
var savRmPrompt = function() {
  console.log('sdfsf')
  savInput.placeholder = '';
  // clearInterval(flashID);
  // savInput.style.visibility = 'visible';
  savInput.style.backgroundColor = 'white';
  savInput.value = '';
  savInput.style.color = 'black';
  savInput.style.textAlign = 'left';

}
// var flashID;

var checkNegative = function() {
  if (Number(savBal.textContent) < 0 === true) {
    savInput.style.backgroundColor = '#EB2F2E';
    savBal.textContent = '0.00';
    savInput.value = 'insufficient funds';
    savInput.style.color = 'white';
    savInput.style.textAlign = 'center';
    // flashID = setInterval(function () {
    //   savInput.style.visibility = (savInput.style.visibility === 'hidden' ? '' : 'hidden');
    // }, 500);
  }
}

// var checkSize = function() {
//   if (Number(savBal.textContent) > 9999999 === true) {
//     savBal.style.fontSize = '1em';
//     savBalMore.style.fontSize = '1.5em';
//     savBal.style.padding = '0 0 40% 0';
//   }
// }

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
