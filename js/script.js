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

// Part 2: Arrays
console.log("Part 2: Arrays");

// Question 1: Console log the 3rd item in this array.

var winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(winningNumbers[2]);

// Question 2: Add a new item to this array using the push method and console log the new amount of items.

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("cheese doodles");

console.log(vegetables.length);

// Question 3: Console log each item in this array using a for loop.

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
  var eachThing = randomThings[i];
  console.log(eachThing);
}
// Question 4: Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

// Both answers is correct.

// var numberValues = moreThings.filter(function (item) {
//   return typeof item === "number";
// });
// console.log(numberValues);

for (var i = 0; i < moreThings.length; i++) {
  var numberValues2 = typeof moreThings[i];
  if (numberValues2 === "number") {
    console.log(moreThings[i]);
  }
}

// Question 5: Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients.sort()[i]);
}

// Question 6: Loop through this array and log every second item.

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

// Both answers is correct.

// for (var i = 0; i < characters.length; i += 2) {
//   console.log(characters[i]);
// }

for (var i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

// Part 3: Null, Objects and arrays of objects
console.log("Part 3: Null, Objects and arrays of objects");

// Question 1:
// Question 2:
// Question 3:
// Question 4:
// Question 5:
// Question 6:

// Part 4: Introduction to functions
console.log("Part 4: Introduction to functions");

// Question 1
// Question 2
// Question 3
// Question 4
// Question 5:
// Question 6:
