var hiddenWord = ['s','t','r','a','n','g','e'];
var listItems = document.querySelectorAll('li');
var image = document.querySelector('img');
var guessed = document.querySelector('.guessed');
// var bg =

var gameImg = ['images/01.png', 'images/02.png', 'images/03.png', 'images/04.png', 'images/05.png', 'images/06.png', 'images/07.png', 'images/08.png', 'images/09.png', 'images/10.png', 'images/11.png'];
var bgImg = ['images/bg01.png', 'images/bg02.png', 'images/bg03.png', 'images/bg04.png', 'images/bg05.png', 'images/bg06.png', 'images/bg07.png']

/*
- user inputs a Letter
- check to see if letter is in hiddenWord
-
- if the letter is in the hiddenWord, replace the dash, otherwise remove a chance and add the letter the Guessed
- if there are no chances left, alert "end of game"
- if the word is guessed, alert " you won!"

- allow double Letters
- ignore symbols
- winner


*/
var userInput = [];
var gameCounter = 0;

image.src = gameImg[gameCounter];

var checkInput = function(event) {
  var keys = userInput.push(event.key);
  if (true) {

  }


  if (hiddenWord.includes(event.key)) {
    var change = hiddenWord.indexOf(event.key)
    listItems[change].textContent = event.key;
  } else {
    gameCounter++
    image.src = gameImg[gameCounter];
    var letter = document.createElement('li');
    var incorrect = document.createTextNode(event.key);
    letter.appendChild(incorrect);
    guessed.appendChild(letter);
  }
}

window.addEventListener('keypress', checkInput);
