console.log('Homework thursday wk01');

//ARRAYS
//Create a variable named days_of_the_week as an array
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Remove Sunday from the last postion and move it to the first position. Use array methods.
daysOfWeek.pop();
daysOfWeek.reverse().push('Sunday');
daysOfWeek.reverse();
console.log(daysOfWeek);


//Create a new array for the days of the week.
var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var weekendDays = ['Saturday', 'Sunday']
var daysOfWeek = weekdays.concat(weekendDays)

console.log(daysOfWeek);

//Remove weekendDays
//not sure how to 'remove' weekendDays. Tried .splice()...
daysOfWeek.splice(5, 2);
console.log(daysOfWeek);

//Sort the remaining days alphabetically
daysOfWeek.sort();
console.log(daysOfWeek);

//OBJECTS
/* Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

var favRecipe = {
  title: 'sardines on toast',
  servings: 2,
  ingredients: ['sourdough bread', 'sardines', 'olive oil', 'salt', 'cherry tomatoes', 'balsamic vinegar']
}

console.log(favRecipe.title);
console.log('Serves: ' + favRecipe.servings);
console.log('Ingredients:');
for (var i = 0; i < favRecipe.ingredients.length; i++) {
  console.log(favRecipe.ingredients[i]);
}

/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var books = [{title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true}, {title: 'American Psycho', author: 'Bret Eastern Ellis', alreadyRead: true}, {title: 'Alice in Wonderland', author: 'Lewis Carroll', alreadyRead: false}]

for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log('You have already read "' + books[i].title + '" by ' + books[i].author)
  } else {
    console.log('You still need to read "' + books[i].title + '" by ' + books[i].author)
  }
}

/*
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var favMovie = {title: 'The Life Aquatic with Steve Zissou', duration: 119, stars: ['Bill Murray', 'Owen Wilson', 'Cate Blanchett']}


console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars: ' + favMovie.stars.join(', '));
