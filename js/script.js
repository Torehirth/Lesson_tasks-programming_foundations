// Lesson tasks module 1
console.log("Lesson tasks module 2");

// Part: String properties
console.log("Part 1: String properties");

// Question 1: Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase === suppliedName.toLowerCase) {
  console.log("Same name");
} else {
  console.log("Not the same name");
}

// Question 2: Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.

var username = "myusername"; //10
console.log(username.length);

var minNumber = 4;
var maxNumber = 10;

if (username.length >= minNumber && username.length <= maxNumber) {
  console.log("Acceptable username");
} else {
  if (username.length <= minNumber) {
    console.log("Too few characters");
  }
  if (username.length >= maxNumber) {
    console.log("To many characters");
  }
}

// Question 3: The following criteria need to be met before an order can be considered complete:

// - The invoice must be paid
// - The product must have been dispatched
// - The customer must have signed for the delivery
// Using the variables below write an if/else statement that determines whether the order is complete:

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
  console.log("Order complete");
} else {
  if (invoicePaid !== true) {
    console.log("Invoice must be paid");
  }
  if (productDispatched !== true) {
    console.log("Product not dispatched");
  }
  if (customerHasSigned !== true) {
    console.log("Customer must sign");
  }
}

// Question 4: Re-write your code from the question above using the logical OR (||) operator.

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid === false || productDispatched === false || customerHasSigned === false) {
  console.log("Order NOT complete");

  if (invoicePaid !== true) {
    console.log("Invoice must be paid");
  }
  if (productDispatched !== true) {
    console.log("Product not dispatched");
  }
  if (customerHasSigned !== true) {
    console.log("Customer must sign");
  }
} else {
  console.log("Order complete");
}

// Part: Arrays
console.log("Part 2: Arrays");

// Question 1
// Question 2
// Question 3
// Question 4

// Part: Null, Objects and arrays of objects

// Question 1
// Question 2
// Question 3
// Question 4

// Part: Introduction to functions

// Question 1
// Question 2
// Question 3
// Question 4
