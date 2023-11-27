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

// 2A. The Basics

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i < 401; i++) {
  console.log(i);
}

for (let i = 12; i <= 4000; i += 2) {
  console.log(i);
}

// 2B. Get even
let i = 1;

while (i != 101) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(i);
  }
  i++;
}

// 2C. Give me Five
//? Weird that the assignment output doesn't in the case of zero?
//? Probably bc they don't want to use 0 - even tho it is a multiple of 5
i = 0;
while (i <= 100) {
  let message = `I found a ${i}.`;
  if (i % 5 === 0 && i != 0) {
    message += ` High five!`;
  }
  if (i % 3 === 0 && i != 0) {
    message += ` Three is a crowd!`;
  }
  if (i != 0 && (i % 3 === 0 || i % 5 === 0)) {
    console.log(message);
  }
  i++;
}

// 2D. Savings Account
/* Despite the assignment saying Sum(1, 10) to get 55,
you actually need to sum from [1, 10] to get 55. */
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
  // console.log(bank_account);
}
console.log(bank_account);

bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(bank_account);

// 3. Arrays & Control Flow
// 3A. Talk about it in your group:

// What are the things in an array called?
// - "Elements" a collection of values or variables
// Do Arrays guarantee those things will be in order?
// - Yes, each have an unique index with the first index starting from 0
// What real-life thing could you model with an array?
// - Taking an Ordered List or Queue of items

// 3B. Easy Does It

const quotes = ["Welcome", "To", "Per Scholas"];

// 3C. Accessing elements

const randomThings = [1, 10, "Hello", true];
randomThings[0];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings[2]);
console.log(randomThings);

// 3D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

// 3E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "Spain");
console.log(myArray);
myArray.shift(5);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop("Spain");
console.log(myArray);
myArray.reverse();
console.log(myArray);
/* Yes .reverse() mutates aka change the array and returns the reference 
to the same array where .reverse() was performed  */

// 3F. Biggie Smalls
let num = 0;

if (num < 100) {
  console.log("little number");
} else {
  console.log("big number");
}
// Another way
let message = num < 100 ? "little number" : "big number";
console.log(message);

// 3G. Monkey in the Middle
let number = 5;
if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// 3H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log("Kristyn is rocking that", kristynsCloset[2], "today!");
kristynsCloset.splice(6, 0, "raybands");
console.log(kristynsCloset);

kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

console.log(
  "Thom is looking fierce in a " +
    thomsCloset[0][0] +
    ", " +
    thomsCloset[1][1] +
    ", " +
    thomsCloset[2][1] +
    "."
);

thomsCloset[1][2] = "Footie Pajamas";

// Thom's PJ's in Winter
console.log(
  "Thom's Winter Pajamas includes:",
  thomsCloset[0][2],
  "shirt &",
  thomsCloset[1][2] + "."
);

// 4. Functions

// 4A. printGreeting

function printGreeting(name) {
  return "Hello there, " + name + "!";
}

console.log(printGreeting("Slimer"));

// 4B. printCool
function printCool(name) {
  return name + " is cool";
}

console.log(printCool("Captain Reynolds"));
// 4C. calculateCube

function calculateCube(number) {
  return Math.pow(number, 3);
}

console.log(calculateCube(5));

// 4D. isVowel

function isVowel(vowel) {
  let vowels = "aeiou";
  return vowels.includes(vowel.toLowerCase());
}

console.log(isVowel("l"));

// 4E. getTwoLengths

function getTwoLengths(name, animal) {
  return [name.length, animal.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 4F. getMultipleLengths

function getMultipleLengths(strArray) {
  strLenArray = [];
  strArray.forEach((element) => {
    strLenArray.push(element.length);
  });
  return strLenArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 4G. maxOfThree

function maxOfThree(num1, num2, num3) {
  // return Math.max(num1, num2, num3);
  let numList = [];
  numList.push(num1, num2, num3);
  numList.sort().reverse();
  let maxNum = numList[0];
  return maxNum;
}

console.log(maxOfThree(6, 9, 1));

// 4H. printLongestWord

function printLongestWord(wordArray) {
  let longestWord = "";
  for (
    let currIndex = 0, nextIndex = 1;
    nextIndex < wordArray.length;
    nextIndex++
  ) {
    if (wordArray[currIndex].length < wordArray[nextIndex].length) {
      longestWord = wordArray[nextIndex];
      currIndex = nextIndex;
    } else {
      longestWord = wordArray[currIndex];
    }
  }
  return longestWord;
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// 5. Objects

// 5A. Make a user object

const user = {
  name: "Kevin",
  email: "kzheng212@gmail.com",
  age: "25",
  purchased: [],
};

// 5B. Update the user
user.email = "john.doe@example.com";
user.age++;
console.log(user);

// 5C. Adding keys and values
user.location = "Union, New Jersey";

// 5D. Shopaholic!
user.purchased.push("carbonhydrates");
user.purchased.push("piece of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[user.purchased.length - 1]);

// 5E. Object-within-object
user.friend = {
  name: "Grace Hopper",
  age: 85,
};
console.log(user);
user.friend = {
  name: "Joseph Johns",
  age: 25,
  location: "Roselle Park, NJ",
  purchased: [],
};

user.friend.purchased.push("A latte");
console.log(user.friend.purchased);

// 5F. Loops

user.purchased.forEach((item) => {
  console.log(item);
});

// console.log(user.purchased);

user.friend.purchased.forEach((item) => {
  console.log(item);
});

// console.log(user.friend.purchased);

// 5G. Functions can operate on objects

// console.log(user.age, user.name);

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
  console.log(user.age, user.name);
}

updateUser();

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
  console.log(person.age, person.name);
}

oldAndLoud(user);

//? Requirements Complete! Hungry for More?
// 6. Cat Combinator

// 6A. Mama cat
const cat1that = {
  name: "Madison",
  age: 10,
  breed: "Bengal",
};

console.log(cat1that.name);
console.log(cat1that.age);

// 6B. Papa cat
const cat2that = {
  name: "Asher",
  age: 6,
  breed: "Ocicat",
};

console.log(cat2that.name);
console.log(cat2that.age);

// 6C. Combine Cats!

function combineCats(cat1, cat2) {
  console.log(cat1);
  console.log(cat2);
  const mergeCat = {
    name: cat1.name + cat2.name,
    age: 1,
    breed: cat1.breed + "-" + cat2.breed,
  };
  return mergeCat;
}

console.log(combineCats(cat1that, cat2that));

// 6D. Cat brain bender
// Deapth o
// console.log(
//   combineCats(combineCats(cat1that, cat2that), combineCats(cat1that, cat2that))
// );
console.log(
  combineCats(
    combineCats(
      combineCats(cat1that, cat2that),
      combineCats(cat1that, cat2that)
    ),
    combineCats(
      combineCats(cat1that, cat2that),
      combineCats(cat1that, cat2that)
    )
  )
);
