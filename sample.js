function addNumbers(a, b) {
  return a + b;
}

// function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2)); // true (2 is a prime number)
console.log(isPrime(4)); // false (4 is divisible by 2)
console.log(isPrime(17)); // true (17 is a prime number)
console.log(isPrime(1)); // false (1 is not a prime number)

// Math.sqrt()

// The Math.sqrt() method returns the square root of a number.

// Syntax: Math.sqrt(x)
// x: A number. If x is negative, Math.sqrt() returns NaN (Not-a-Number).

console.log(Math.sqrt(9)); // Output: 3
console.log(Math.sqrt(0)); // Output: 0
console.log(Math.sqrt(1)); // Output: 1
console.log(Math.sqrt(49)); // Output: 7
console.log(Math.sqrt(2)); // Output: 1.4142135623730951 (approximately)
console.log(Math.sqrt(-9)); // Output: NaN

// You can use variables as well:
let number = 16;
let squareRoot = Math.sqrt(number);
console.log("The square root of " + number + " is: " + squareRoot); // Output: The square root of 16 is: 4

// Modulus Operator (%)
// The modulus operator (%) returns the remainder of a division operation.
// Syntax: a % b
// a: The dividend (the number being divided).
// b: The divisor (the number by which a is being divided).

console.log(10 % 3); // Output: 1 (10 divided by 3 is 3 with a remainder of 1)
console.log(15 % 5); // Output: 0 (15 divided by 5 is 3 with a remainder of 0)
console.log(7 % 2); // Output: 1 (7 divided by 2 is 3 with a remainder of 1)
console.log(20 % 4); // Output: 0 (20 divided by 4 is 5 with a remainder of 0)
console.log(-10 % 3); // Output: -1 (The sign of the result is usually the same as the sign of the dividend)
console.log(10 % -3); // Output: 1
console.log(10 % 3); // Output: 1

// Common Use Cases for Modulus Operator:
// 1. Checking for Even or Odd Numbers:
let num = 11;
if (num % 2 === 0) {
  console.log(num + " is an even number.");
} else {
  console.log(num + " is an odd number."); // Output: 11 is an odd number.
}

num = 12;
if (num % 2 === 0) {
  console.log(num + " is an even number."); // Output: 12 is an even number.
} else {
  console.log(num + " is an odd number.");
}

// 2. Wrapping Around or Cycling Through Values:
// Imagine you have a counter that should go from 0 to 2 and then back to 0.
for (let i = 0; i < 10; i++) {
  console.log(i % 3); // Output: 0, 1, 2, 0, 1, 2, 0, 1, 2, 0
}

// 3. Determining if a Number is a Multiple of Another:
let value = 21;
let divisor = 7;
if (value % divisor === 0) {
  console.log(value + " is a multiple of " + divisor + "."); // Output: 21 is a multiple of 7.
} else {
  console.log(value + " is not a multiple of " + divisor + ".");
}
