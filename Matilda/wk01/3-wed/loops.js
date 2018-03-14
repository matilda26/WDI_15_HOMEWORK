// The even/odd reporter

for (var count = 0; count <= 20; count++) {
  if (count % 2 === 0) {
    console.log(count + ' is even');
  } else {
    console.log(count + ' is odd');
  }
}

// Multiplication Tables

for (var number = 0; number <= 10; number++) {
  console.log(number + ' * 9 = ' + number * 9);
}

//Bonus

for (var number = 0; number <= 10; number++) {
  for (var multiplier = 0; multiplier <= 10; multiplier++) {
    console.log(number + ' * ' + multiplier +  ' = ' + number * multiplier);
  }
}

//Your top choices

var topChoices = ['orange', 'trump', 7];
for (var i = 0; i < topChoices.length; i++) {
  console.log('My #1 choice is ' + topChoices[i]);
}

//Bonus

var topColors = ['orange', 'red', 'yellow'];
for (var i = 0; i < topColors.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + topColors[i]);
}
