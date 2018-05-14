

function sumOfMultiples (num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }
  console.log(result);
}

sumOfMultiples(process.argv[2])
