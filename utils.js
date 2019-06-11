// This function calculated the fibonacci series of a number
const fibonacci = num => {
  let fibs = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs;
};

// This function checks if a number is a prime
const isPrime = num => {
  if (num < 2) return false;
  // An integer is prime if it is not divisible by any
  // prime less than or equal to its square root
  let x = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= x; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// This function calculates the Greatest Common Divisor (GCD) of two
// integers using Euclidean algorithm.
const calculateGCD = (firstInt, secondInt) => {
  return secondInt === 0
    ? firstInt
    : calculateGCD(secondInt, firstInt % secondInt);
};

module.exports = {
  fibonacci,
  isPrime,
  calculateGCD
};
