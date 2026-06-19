// function to check if a number is prime
function isPrimeWithSQRT(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(isPrimeWithSQRT(2)); // true (2 is a prime number)
// console.log(isPrimeWithSQRT(4)); // false (4 is divisible by 2)
// console.log(isPrimeWithSQRT(17)); // true (17 is a prime number)
// console.log(isPrimeWithSQRT(1)); // false (1 is not a prime number)

function isPrimeWithoutSQRT(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(isPrimeWithoutSQRT(2)); // false (should be true)
// console.log(isPrimeWithoutSQRT(4)); // false (correct)
// console.log(isPrimeWithoutSQRT(17)); // false (should be true)
// console.log(isPrimeWithoutSQRT(1)); // false

function isPrimeWithoutSQRT_2(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// same as isPrimeWithSQRT but with a different loop condition
console.log(isPrimeWithoutSQRT_2(2)); // true
console.log(isPrimeWithoutSQRT_2(4)); // false
console.log(isPrimeWithoutSQRT_2(17)); // true
console.log(isPrimeWithoutSQRT_2(1)); // false
