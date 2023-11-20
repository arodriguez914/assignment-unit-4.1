console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test

console.log(helloName('Ariel'));


// 3. Function to add two numbers together & return the result
function addNumbers(a,b) {
  // return firstNumber + secondNumber;
  return a + b;
}

console.log(addNumbers(10, 9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b , c) {
  return a*b*c;
}

console.log(multiplyThree (1, 2, 3));
  

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;}
  }

  // Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log(isPositive(2));
console.log(isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
numArr = [1, 10, 8, 2, 5, 5, 4];

function getLast(array){
  for (let i = 0; i < array.length; i++)
    return array[array.length - 1];
  }

getLast(numArr);
console.log(getLast(numArr));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 



function find(value, array) {
for (i = 0; i < array.length; i++)
  if (value == array[i]){
    return true;
  }
  if (value !== array[i]) {
    return false
  }
}


console.log(numArr);
console.log('Number 5 found:', find(5, numArr));
console.log('Number 3 found:', find(3, numArr));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let sentence = 'The dog is brown.';

function isFirstLetter(letter, string) {
  if (letter == string.charAt(0)){
      return true;
    } else {
       return false;
    }
  }
  
  console.log(isFirstLetter('T', sentence));



// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  // TODO: loop to add items
  for (let i = 0; i < array.length; i++ ) {
     sum += array[i];
  }
      return sum;
  // TODO: return the sum
}

console.log(sumAll(numArr));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let array2 = [-1, -2, -3, -4, 0, 1, 2, 3]

function allPositive(value){
  return value > 0;
}

const even = array2.filter(allPositive);

console.log(even);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes the age in years and returns the age in days.
//Ignore leap years and days between last birthday and now.
//Expect only positive integer inputs.

function calcAge(age){
  return age * 365;
}

console.log('I am', calcAge(29),'days old');


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
