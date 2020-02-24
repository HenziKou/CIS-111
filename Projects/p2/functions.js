// jshint esversion: 6


// Part A
function greetUser(fName, lName) {
  return `Hello, ${fName} ${lName}!\n  Welcome to JavaScript!`;
}

greetUser("Billie", "Jean");


// Part B - use a function declaration statement
function sum3(num1, num2, num3) {
  return num1 + num2 + num3;
}

sum3(4, 3, 9);
sum3(-5, 12, 7.5);


// Part C - use a function expression statement
let mult3 = function(num1, num2, num3) {
  return num1 * num2 * num3;
};

mult3(4, 3, 9);
mult3(-5, 12, 7);


// Part D - use a function declaration statement
function milesToInches(mile) {
  return 63360 * mile;
}

milesToInches(6);
milesToInches(2.5);


// Part E - use a function expression statement
let pizzaPSI = function(cost, size) {
  var area = Math.PI * (size / 2) ** 2;
  var psi = (cost / area).toFixed(2);
  return `Cost of pizza: $${cost}\n  Diameter: ${size}\n  Cost PSI = $${psi}`;
};

pizzaPSI(10.95, 12);


// Part F - use a function expression statement
let isDivBy = function(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
};

isDivBy(5, 2);
isDivBy(111, 3);


// Part G - use a function declaration statement
function waterStates(temp) {
  if (temp <= 32)
    return "solid";
  else if (temp <= 212)
    return "liquid";
  else if (temp <= 21140)
    return "gas";
  else
    return "plasma";
}

waterStates(30);
waterStates(90);
waterStates(234);
