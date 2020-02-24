// jshint esversion: 6

// Part A
function isSnakeEyes(num1, num1) {
  if (num1 == 1 && num2 == 1)
    return true;
  else
    return false;
}

isSnakeEyes(1, 5);
isSnakeEyes(1, 1);


// Part B - use a function expression statement
let notNaturalSeven = function(num1, num2) {
  if ((num1 == 1 && num2 == 6) || (num1 == 6 && num2 == 1)) {
    return true;
  } else if ((num1 == 2 && num2 == 5) || (num1 == 5 && num2 == 2)) {
    return true;
  } else
    return false;
};

notNaturalSeven(5, 2);
notNaturalSeven(4, 3);


// Part C - use a function expression statement
let isVowel = function(ch) {
  return /[aeiouyAEIOUY]/g.test(ch);
};

isVowel("A");
isVowel("b");


// Part D
function countVowels(s) {
  // initialize a variable counter
  var count = 0;

  for (var i = 0; i < s.length; i++) {
    if (/[aeiouyAEIOUY]/g.test(s.charAt(i)) == true) {
      count += 1;
    }
  } // end for loop

  return count;
}

countVowels("Rhythms");
countVowels("AOxomoXOa");


// Part E
function sumOfDigits(num) {
  // initialize a variable sum
  var sum = 0;
  var s = num.toString();

  while (s.length > 0) {
    var digit = s.substr(s.length - 1);
    s = s.slice(0, s.length - 1);
    sum += parseInt(digit);
  }

  return sum;
}

sumOfDigits(12345);
sumOfDigits(8675309);


// Part F
function randomGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollSnakeEyes() {
  var count = 0;

  do {
    var a = randomGenerator();
    var b = randomGenerator();
    count += 1;
  } while (a != 1 || b != 1);

  return count;
}

rollSnakeEyes();
rollSnakeEyes();
