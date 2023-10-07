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

// Question 1: Console log the price property from the object below:

var product = {
  name: "Chicken feet",
  price: 149.99,
};

console.log(product.price);

// Question 2: Loop through the array below and console log each colour property.

var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (i = 0; i < animals.length; i++) {
  console.log(animals[i].colour);
}

// Question 3: Loop through the array below and console log each name property only if it is on special.

var dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (i = 0; i < dinnerOptions.length; i++) {
  if (dinnerOptions[i].onSpecial === true) {
    console.log(dinnerOptions[i].name);
  }
}

// Question 4: Loop through the array below and log each person's name and surname if they are between the ages of 20 and 50 (including 20 and 50):

var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];

for (i = 0; i < people.length; i++) {
  if (people[i].age >= 20 && people[i].age <= 50) {
    console.log(people[i].firstName + " " + people[i].lastName);
  }
}

/* 
// this is also correct.
for (var i = 0; i < people.length; i++) {
  var age = people[i].age;
  var fullName = people[i].firstName + " " + people[i].lastName;

  if (age >= 20 && age <= 50) {
    console.log(fullName);
  }
}
*/

// Question 5: Select the ul element in the HTML file, loop through the array below and create a li element containing the product name and price properties.

var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

var listItems = document.querySelector("#list");

for (i = 0; i < products.length; i++) {
  listItems.innerHTML = listItems.innerHTML + "<li>" + products[i].name + " - " + products[i].price + "</li>";
}

// also correct below.

// for (var i = 0; i < products.length; i++) {
//   var details = products[i].name + " - " + products[i].price;
//   listItems.innerHTML = listItems.innerHTML + "<li>" + details + "</li>";
// }

// Part 4: Introduction to functions
console.log("Part 4: Introduction to functions");

// Question 1: Declare and call a function that logs the string "What the func is this nonsense?"

function logString() {
  console.log("What the func is this nonsense?");
}
logString();

// Question 2: Create and call a function with two arguments, firstName and lastName.
// The function should log both the argument values with a space between them.

function logName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log(fullName);
}
logName("Emma", "Olsen");

// Question 3: Create a function with two arguments, firstNumber and secondNumber.
// Inside the function, check the type of the arguments.
// If they are numbers, multiply them and return the result.
// If either of them are not numbers return the message: "Please supply number values".
// Call the function, assign the return value to a variable called result and log the variable.

function logNumber(firstNumber, secondNumber) {
  var typeOfFirstNumber = typeof firstNumber;
  var typeOfSecondNumber = typeof secondNumber;

  if (typeOfFirstNumber === "number" && typeOfSecondNumber === "number") {
    return firstNumber * secondNumber;
  } else return "Please supply number values";
}
var result = logNumber(10, 5);
console.log(result);

// Question 4: Create a function with three arguments.
// Try and convert each argument to a number.
// If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".
// If all arguments are numbers or can be converted to numbers, add them all and return the result.
// Select the p element on the page and assign the result of the function call to be its innerHTML value.

function convertToNumber(arg1, arg2, arg3) {
  var num1 = parseInt(arg1);
  var num2 = parseInt(arg2);
  var num3 = parseInt(arg3);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    return "Invalid argument types";
  }
  var sum = num1 + num2 + num3;
  return sum;
}
var result = convertToNumber(2, 4, 6);
console.log(result);

var htmlResult = document.querySelector("#result");
htmlResult.innerHTML = result;

// Question 5: Select the button with the class heading using document.querySelector.
// Create a function and assign it to the onclick property of the button.
// The function should select the h1 element on the page and update its innerHTML without replacing the existing value.
// After clicking once, the innerHTML value should be Functions: Updated.
// Clicking the button again would mean the heading reads: Functions: Updated: Updated

var headingBtn = document.querySelector("#headingbtn");

headingBtn.onclick = function () {
  var h1Heading = document.querySelector("h1");
  h1Heading.innerHTML += ": Updated";
};

// Question 6: Select the button with the class title.
// When this is button is clicked, update the title of the page (not the heading, the HTML page title visible in the browser tab) to read: I've been updated.
// Hint: use console.dir(document) to view the properties available on the document object.

var btnTitle = document.querySelector("#titlebtn");

function changeTitle() {
  document.title = "I've been updated";
}
btnTitle.onclick = changeTitle;

// Question 7: Select the buttons with the classes red, orange and pink.
// Clicking on these buttons should change the background of the page to red, orange and pink respectively.

var changeColourToRed = document.querySelector("#redbtn");
var changeColourToOrange = document.querySelector("#orangebtn");
var changeColourToPink = document.querySelector("#pinkbtn");

function changeBackgroundColour(colour) {
  document.body.style.backgroundColor = colour;
}
changeColourToRed.onclick = function () {
  changeBackgroundColour("red");
};
changeColourToOrange.onclick = function () {
  changeBackgroundColour("orange");
};
changeColourToPink.onclick = function () {
  changeBackgroundColour("pink");
};
