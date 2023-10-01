// Lesson tasks module 1

console.log("Lesson tasks module 1");

console.log("Part: Strings, numbers and Boleans");
// Part: Strings, numbers and Boleans

//Question 1
var number1 = parseInt(6);
var number2 = parseFloat(4.5);
var totalnumber = number1 + number2;

console.log(totalnumber);
console.log(typeof totalnumber);

// Question 2
var workingDays = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";

console.log(workingDays);
console.log(typeof workingDays);

// Question 3
var addition = 5 + parseFloat(4.5);
var subtraction = 5 - parseFloat(4.5);
var multiplication = 5 * parseFloat(4.5);
var division = 5 / parseFloat(4.5);

console.log(addition);
console.log(typeof addition);

console.log(subtraction);
console.log(typeof subtraction);

console.log(multiplication);
console.log(typeof multiplication);

console.log(division);
console.log(typeof division);

// Question 4
// var firstName = prompt("Name");

// if (firstName == "Santos") {
//   alert("Santos is true");
//   console.log("Santos is true");
// } else {
//   alert("name is false");
//   console.log("name is false");
// }

var isWorking = false;

console.log(typeof isWorking);

// Question 5
var sentence = "The frogs are angry.";

console.log(sentence.length);
console.log(typeof sentence);

// Question 6
var timeElapsed;
var totalPrice;

// Question 7 - Convert the following string values to number values:

var number1 = "53";
var number2 = "44.6";

convertedNumber1 = parseInt(number1);
convertedNumber2 = parseFloat(number2);

// Question 8 - Check the type of the following variables and log the results:

var pet = "donkey";
console.log(typeof pet);

var age = 89;
console.log(typeof age);

var discountApplied = true;
console.log(typeof discountApplied);

var timeLeft;
console.log(typeof timeLeft);

// Question 9 - Declare and initialise a variable with the value "Updating heading".
// Question 9 - Select the h1 element on the page and set it's inner HTML value to be the variable created above.

// var heading = "Updating heading";

// var h1_element = document.querySelector("#h1");
// h1_element.innerHTML = heading;

// Question 10 - Select the body element on the page and change its background colour to lightskyblue.

// var bodyColor = document.querySelector("#body");
// bodyColor.style.backgroundColor = "lightskyblue";
// h1_element.style.color = "black";

// ------------------------------------------------------------------------------------------------------------------------------------
console.log("Part: Making decisions");
// Part: Making decisions

// question 1; write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
  console.log("The first number is smaller than the second");
}

// question 2; write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
  console.log("You are old enough!");
} else if (age < minimumAge) {
  console.log("you are NOT old enough!");
}

// question 3; write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
  console.log("maximumIncome requirement met!");
} else {
  console.log("maximumIncome requirement NOT met!");
}

// question 4; Fix this code:

/*var colour = "blue";

if ((colour = "orange")) {
    console.log("This colour is a bit rubbish");
}*/

var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

// question 5; write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;

if (invoicePaid === false) {
  console.log("Not paid");
}
// question 6; write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator.

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
  console.log("You lose again");
} else {
  console.log("You win!");
}

// question 7;
// write a switch statement that log the weekday name depending on the value of dayOfTheWeek.
// If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
// If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 2;
var day;

switch (dayOfTheWeek) {
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wedensday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  case 7:
    day = "sunday";
    break;

  default:
    day = "Ivalid day number";
}
console.log(day);

// Part: Loops
console.log("Part: Loops");

// question 1; Write a loop that logs the numbers 0 to 7.

for (var i = 0; i <= 7; i++) {
  console.log(i);
}

// question 2; Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.

for (var i = 10; i > 0; i--) {
  console.log(i);
}

// question 3; Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc.

for (var i = 10; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
