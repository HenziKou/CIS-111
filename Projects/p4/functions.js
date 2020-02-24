// jshint esversion: 6

// Part A - using arrow function
let toggleCase = (s) => {
  let result = "";
  for (var i = 0; i < s.length; i++) {
    if (/[a-z]/g.test(s[i]) == true) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    } // end if block
  } // end for loop

  return result;
};

toggleCase("AaBbc");
toggleCase("AoXoMoXoA");


// Part B - using arrow function
let dashBTweenEvens = (n) => {
  let result = "";
  let s = n.toString();

  for (var i = 0; i < s.length; i++) {
    if (/[2468]/g.test(s[i]) == true && /[2468]/g.test(s[i + 1]) == true) {
      result = result + s[i] + "-";
    } else {
      result = result + s[i];
    } // end if block
  } // end for loop

  return result;
};

dashBTweenEvens(225468);
dashBTweenEvens(8675309);


// Part C - using arrow function
let isAlphaNumeric = (ch) => /[a-zA-Z0-9]/g.test(ch);

isAlphaNumeric("A");
isAlphaNumeric("y");
isAlphaNumeric("!");
isAlphaNumeric("9");
isAlphaNumeric("*");


// Part D - using arrow function
let isWeekDay = (s) => {
  var date = new Date(s);
  var day = date.getDay();

  if (day == 0 || day == 6) {
    return false;
  } else {
    return true;
  }
};

isWeekDay("02/29/2004");
isWeekDay("Nov 7, 2014");


// Part D-XC - using arrow function
let isGregorianWeekDay = (s) => {
  var date = new Date(s);
  var day = date.getDay();

  // exception dates range
  // Date(1752, 9, 3);  -->  this passes as 'Tue Oct 03 1752'
  var start = new Date(1752, 8, 3);
  var end = new Date(1752, 8, 13);

  if (date >= start && date <= end) {
    return "Not available in U.S. Gregorian calendars";
  } else if (day == 0 || day == 6) {
    return false;
  } else {
    return true;
  }
};

isGregorianWeekDay("09/05/1752"); // this passes as 'Tue Sep 05 1752'


// Part E - using arrow function
let rollDoubles = (n) => {
  var count = 0;

  do {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    console.log(x + " " + y);
    count++;
  } while (x != n || y != n);

  return count;
};

rollDoubles(6);
rollDoubles(4);
