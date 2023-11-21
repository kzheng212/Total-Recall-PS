// Section 1

// 1. Variables & Data types

// 1A. Variables

const myName = "Kevin";

let favoriteLanguage = "Python";

let newFavoriteLanguage = "JavaScript";

newFavoriteLanguage = favoriteLanguage;

console.log(`${myName}'s favorite Langauge is: ${favoriteLanguage}`);

// 1B. String
let firstVariable;
firstVariable = "Hello World";
firstVariable = 100;
let secondVariable = firstVariable;
console.log(firstVariable);
let yourName = "Kevin Zheng";
let concatString = "Hello, my name is " + yourName;
console.log(concatString);

// 1C. Boolean
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// 1D. The Farm
let animal = "cow";
if (animal === "cow") {
  console.log("moooooo!");
} else {
  console.log("Hey! You're not a cow.");
}

// 1E. Driver's ED
let personAge = 15;
if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// 2. Loops
