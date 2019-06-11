const utils = require('../utils');

/**
 * Sum All Numbers in a Range:
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus t
 * he sum of all the numbers between them.
 *
 *       =========> NOTE <==========
 * The lowest number will not always come first.
 */
const sumAll = arr => {
  const [firstItem, secondItem] = arr.sort((a, b) => a - b);
  let totalSum = 0;
  for (let i = firstItem; i <= secondItem; i++) {
    totalSum += i;
  }
  return totalSum;
};

/**
 * Diff Two Arrays:
 * Compare two arrays and return a new array
 * with any items only found in one of the
 * two given arrays, but not both. In other
 * words, return the symmetric difference
 * of the two arrays.
 */

//  Soulution 1
const diffArray = (arr1, arr2) => {
  const commons = arr1.filter(item => arr2.includes(item));
  const combined = [...arr1, ...arr2];
  return combined.filter(item => !commons.includes(item));
};

// Solution 2 <==== Not Mine ====>
const diffArray = (arr1, arr2) => {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
};

/**
 * Seek and Destroy:
 * You will be provided with an initial array
 * (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all
 * elements from the initial array that are of
 * the same value as these arguments.
 */
function destroyer(arr) {
  const [firstArg, ...otherArgs] = Array.from(arguments);
  return firstArg.concat(otherArgs).filter(item => !otherArgs.includes(item));
}

/**
 * Wherefore art thou:
 * Make a function that looks through an array of objects
 * (first argument) and returns an array of all objects
 * that have matching name and value pairs (second argument).
 * Each name and value pair of the source object has to be
 * present in the object from the collection if it is to be
 * included in the returned array.
 *
 * For example, if the first argument is
 * [
 *  { first: "Romeo", last: "Montague" },
 *  { first: "Mercutio", last: null },
 *  { first: "Tybalt", last: "Capulet" }
 * ],
 * and the second argument is { last: "Capulet" },
 * then you must return the third object from the
 * array (the first argument), because it contains
 * the name and its value, that was passed on as
 * the second argument.
 *
 * <============= NOTE =============>
 * None of the following were originally mine. After
 * several attempts I looked up the solutions on
 * FCC Get a Hint page
 */
// Solution 1
const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source);

  const filtered = collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
};

// Solution 2 <==== Not Mine ====>
const whatIsInAName = (collection, source) => {
  const srcKeys = Object.keys(source);

  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
};

/**
 * Spinal Tap Case
 * Convert a string to spinal case.
 * Spinal case is all-lowercase-words-joined-by-dashes.
 */
// Solution 1
const spinalCase = str => {
  const replaceSpecialChars = str.replace(/[^A-Z0-9]+/gi, ' ');
  const spinalTapCase = replaceSpecialChars
    .split(/(?=[A-Z])/)
    .map(word => word.trim().toLowerCase())
    .join('-')
    .split(' ')
    .join('-');
  return spinalTapCase;
};

// Solution 2 <==== Not Mine ====>
const spinalCase = str => {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join('-');
};

// Solution 3 <==== Not Mine ====>
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

/**
 * Pig Latin:
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant
 * (or consonant cluster) of an English word,
 * moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.
 */
const translatePigLatin = str => {
  // Search the occurence of the first vowel. It'll return null is not match
  const firstVowel = str.match(/[aieou]/);
  // Get the postion of the first volume
  const firstPosition = str.indexOf(firstVowel);

  // Check if the str does not contain any vowels
  if (firstVowel === null) return str + 'ay';

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }

  return str + 'way';
};

/**
 * Search and Replace
 * Perform a search and replace on the sentence using
 * the arguments provided and return the new sentence.
 *
 * First argument is the sentence to perform the search
 * and replace on.
 *
 * Second argument is the word that you will be replacing
 *  (before).
 *
 * Third argument is what you will be replacing the second
 * argument with (after).
 *
 * <=================== NOTE ===================>
 * Preserve the case of the first character in the original
 * word when you are replacing it. For example if you mean
 * to replace the word "Book" with the word "dog", it
 * should be replaced as "Dog"
 */
const myReplace = (str, before, after) => {
  if (before.charAt(0).match(/^[A-Z]*$/)) {
    const capitalizeAfter = after.replace(/^\w/, firstChar =>
      firstChar.toUpperCase()
    );
    return str.replace(before, capitalizeAfter);
  }

  return str.replace(before, after);
};

/**
 * DNA Pairing:
 * The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return
 * the results as a 2d array.
 */
const pairElement = str => {
  const pairedElement = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        pairedElement.push([str[i], 'T']);
        break;
      case 'T':
        pairedElement.push([str[i], 'A']);
        break;
      case 'C':
        pairedElement.push([str[i], 'G']);
        break;
      case 'G':
        pairedElement.push([str[i], 'C']);
        break;
      default:
        break;
    }
  }
  return pairedElement;
};

/**
 * Missing letters:
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */
const fearNotLetter = str => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  const completeLetters = alphabet.substring(
    alphabet.indexOf(firstChar),
    alphabet.indexOf(lastChar) + 1
  );
  const missingLetters = completeLetters
    .split('')
    .filter(letter => !str.split('').includes(letter));

  return missingLetters.length ? missingLetters.join('') : undefined;
};

// Solution 2 <==== Not Mine ====>
/**
 * Code Explanation:
 * 1. Loop over the string
 * 2. Check if the difference in char codes between
 *    adjacent characters in the string is more than 1
 * 3. Return the missing character (+1 from where the gap was detected)
 */
const fearNotLetter = str => {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
};

// Solution 3 <==== Not Mine ====>
const fearNotLetter = str => {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const code = str.charCodeAt(i);

    /* if code of current character is not equal to first 
    character + no of iteration hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character 
      find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
};

/**
 * Sorted Union:
 * Write a function that takes two or more arrays and
 * returns a new array of unique values in the order
 * of the original provided arrays.
 *
 * In other words, all values present from all arrays
 * should be included in their original order, but
 * with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original
 * order, but the final array should not be sorted in
 * numerical order.
 */
// Solution 1
const uniteUnique = arr => {
  const argsArr = Array.from(arguments).reduce((acc, arr) => {
    acc.push(...arr);
    return acc;
  }, []);

  return Array.from(new Set(argsArr));
};

// Solution 2 <==== Mine ====>
const uniteUnique = arr => {
  const newArr = [...arguments].reduce((acc, arr) => {
    acc.push(...arr);
    return acc;
  }, []);

  return [...new Set(newArr)];
};

/**
 * Convert HTML Entities:
 * Convert the characters &, <, >, " (double quote),
 * and ' (apostrophe), in a string to their corresponding
 * HTML entities.
 */
// Solution 1
const convertHTML = str => {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  const convertedStr = str.split('');

  for (var i = 0; i < convertedStr.length; i++) {
    if (Object.keys(htmlEntities).includes(convertedStr[i])) {
      convertedStr[i] = htmlEntities[convertedStr[i]];
    }
  }

  return convertedStr.join('');
};

// Solution 2 <==== Not Mine ====>
function convertHTML(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split('')
    .map(entity => htmlEntities[entity] || entity)
    .join('');
}

/**
 * Sum All Odd Fibonacci Numbers:
 * Given a positive integer num, return the sum of all
 * odd Fibonacci numbers that are less than or equal to num
 */
const sumFibs = num => {
  let fibNumbers = utils.fibonacci(num);
  return fibNumbers.reduce((accumulator, currentItem) => {
    if (currentItem <= num && currentItem % 2 !== 0) {
      accumulator += currentItem;
    }
    return accumulator;
  }, 0);
};

/**
 * Sum All Primes:
 * Sum all the prime numbers up to and including the provided number.
 *
 *        =========> NOTE <==========
 * The provided number may not be a prime.
 */
const sumPrimes = num => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (utils.isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

/**
 * Smallest Common Multiple:
 * Find the smallest common multiple of the provided
 * parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range
 * between these parameters.
 *
 * The range will be an array of two numbers that
 * will not necessarily be in numerical order.
 */
const smallestCommons = arr => {
  const range = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  let lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    lcm = (lcm * range[i]) / utils.calculateGCD(lcm, range[i]);
  }
  return lcm;
};

/**
 * Drop it:
 * Given the array arr, iterate through and remove each element
 * starting from the first element (the 0 index) until the function
 * func returns true when the iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied,
 * otherwise, arr should be returned as an empty array.
 */
const dropElements = (arr, func) => {
  const times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
};

/**
 * Steamroller:
 * Flatten a nested array. You must account for varying levels of nesting.
 */
const steamrollArray = arr => {
  let flattenedArray = [];

  const flattenArray = arr => {
    arr.map(item =>
      !Array.isArray(item) ? flattenedArray.push(item) : flattenArray(item)
    );
  };

  flattenArray(arr);

  return flattenedArray;
};

/**
 * Binary Agents:
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */
const binaryAgent = str => {
  // 1. Convert the string to an array by splitting it at the space
  // 2. Convert the binary number to a decimal number using the parseInt
  // 3. Convert each parseed number to a char using String.fromCharCode()
  const convertedBinary = str.split(' ').reduce((accumulator, currentItem) => {
    accumulator += String.fromCharCode(parseInt(currentItem, 2));
    return accumulator;
  }, '');
  return convertedBinary;
};

/**
 * Everything Be True:
 * Check if the predicate (second argument) is truthy on all elements of
 * a collection (first argument).
 *
 * In other words, you are given an array collection of objects. The predicate
 * pre will be an object property and you need to return true if its value is
 * truthy. Otherwise, return false.
 */
// Solution 1
const truthCheck = (collection, pre) => {
  for (let item of collection) {
    if (Boolean(item[pre]) === false) return false;
  }
  return true;
};

// Solution 2 <==== Not Mine ====>
const truthCheck = (collection, pre) => {
  return collection.every(element => {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
};

// Solution 3 <==== Not Mine ====>
const truthCheck = (collection, pre) => {
  return collection.every(obj => obj[pre]);
};

/**
 * Arguments Optional:
 * Create a function that sums two arguments together. If only one
 * argument is provided, then return a function that expects one
 * argument and returns the sum.
 *
 * For example, addTogether(2, 3) should return 5,
 * and addTogether(2) should return a function.
 *
 * Calling this returned function with a single argument will then
 * return the sum: var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 */

function addTogether() {
  const args = Array.from(arguments);
  if (args.length === 1 && !args.every(item => Number.isInteger(item))) {
    return undefined;
  }
  if (args.length === 1 && args.every(item => Number.isInteger(item))) {
    return function(b) {
      return Number.isInteger(b) ? args[0] + b : undefined;
    };
  }
  if (args.length === 2 && args.every(item => Number.isInteger(item))) {
    return args[0] + args[1];
  }
}

/**
 * Make a Person:
 * Fill in the object constructor with the following methods below:
 * getFirstName() getLastName() getFullName() setFirstName(first)
 * setLastName(last) setFullName(firstAndLast)
 *
 * The methods that take an argument must accept only one argument
 * and it has to be a string.
 *
 * These methods must be the only available means of interacting with
 * the object.
 */
const Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };

  this.setFullName = function(name) {
    firstAndLast = name;
    return firstAndLast;
  };
  this.setLastName = function(last) {
    firstAndLast = `${firstAndLast.split(' ')[0]} ${last}`;
    return firstAndLast;
  };
  this.setFirstName = function(first) {
    firstAndLast = `${first} ${firstAndLast.split(' ')[1]}`;
    return firstAndLast;
  };
};

/**
 * Map the Debris:
 * Return a new array that transforms the elements' average altitude
 * into their orbital periods (in seconds).
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 *
 * The values should be rounded to the nearest whole number. The body being
 * orbited is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth
 * is 398600.4418 km3s-2.
 */
const orbitalPeriod = arr => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const calculateOrbitalPeriod = obj => {
    const period =
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM);
    return Math.round(period);
  };

  return arr.map(item => ({
    name: item.name,
    orbitalPeriod: calculateOrbitalPeriod(item)
  }));
};
