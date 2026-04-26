/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.



/* 
console.log("Welcome to the bootcamp
*/



// What’s Wrong?
//SYNTAX ERROR - Code is missing the closing quotation marks, closing parentheses, and semicolon.

console.log("Welcome to the bootcamp"); //Fixed - added missing components

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.


/*
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
  */

// What’s Wrong?
// LOGIC ERROR - the program doesn't actually crash at runtime for me, it just spits out "NaN" when it tries to multiply "eight" by 2. 

let numbers = [2, 4, "8"]; //Fix: change the last value in the array to "8" and let JS typecast it OR just change it to 8, an integer.
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

/*
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}
  

console.log(isPrime(7)); // Expected true but gets false
*/

// What’s Wrong?
// LOGIC ERROR - When testing if a number has no remainder, it will return true, confirming the number IS prime.
// However, if a number is evenly divisible by any number other than 1 and itself, it is instantly non-prime. 
// The program should return FALSE if it finds an evenly divisible number.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Fixed: show a number is divisble, therefore non-prime
    }
  }
  return true; // Fixed: found no evenly divisible numbers, IS prime
}
  

console.log(isPrime(7));