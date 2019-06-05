// Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Reverse a String
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Factorialize a Number
function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}

/**
 * Find the Longest Word in a String:
 * Return the length of the longest word
 * in the provided sentence.
 */
// Approach 1
function findLongestWordLength(str) {
  const words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

// Approach 2
function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

/**
 * Return Largest Numbers in Arrays:
 * Return an array consisting of the largest
 * number from each provided sub-array.
 */
function largestOfFour(arr) {
  let largestNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    largestNumbers.push(Math.max(...arr[i]));
  }
  return largestNumbers;
}

/**
 * Confirm the Ending:
 * Check if a string (first argument, str) ends with
 * the given target string (second argument, target).
 */
function confirmEnding(str, target) {
  // Get the last characters in the str
  lastChars = str.slice(str.length - target.length);
  // Compare the last characters with the target
  return lastChars === target;
}

/**
 * Repeat a String
 * Repeat a given string str (first argument) for num
 * times (second argument). Return an empty string
 * if num is not a positive number.
 */
function repeatStringNumTimes(str, num) {
  let repeatedStr = "";

  if (num <= 0) return repeatedStr;

  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

/**
 * Truncate a String:
 * Truncate a string (first argument) if it is longer
 * than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

/**
 * Finders Keepers:
 * Create a function that looks through an array
 * (first argument) and returns the first element
 * in the array that passes a truth test (second argument)
 * If no element passes the test, return undefined.
 */
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) return num;
  }
  return undefined;
}

/**
 * Boo who:
 * Check if a value is classified as a boolean
 * primitive. Return true or false.
 */
function booWho(bool) {
  return typeof bool === "boolean";
}

/**
 * Title Case a Sentence:
 * Return the provided string with the first letter of
 * each word capitalized. Make sure the rest of the word
 * is in lower case.
 */
function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  let titleCased = [];
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i].charAt(0);
    titleCased.push(strArr[i].replace(char, char.toUpperCase()));
  }
  return titleCased.join(" ");
}

/**
 * Slice and Splice:
 * Use the array methods slice and splice to copy each
 * element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain
 * the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
  const arr3 = arr2.slice(0);
  const spliceArr = arr3.splice(n, 0, ...arr1);
  return arr3;
}

/**
 * Falsy Bouncer:
 * Remove all falsy values from an array.
 */
function bouncer(arr) {
  let truthyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      truthyValues.push(arr[i]);
    }
  }
  return truthyValues;
}

/**
 * Where do I Belong:
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it
 * has been sorted. The returned value should be a number.
 */

// Approach 1
function getIndexToIns(arr, num) {
  let sortedArray = arr.sort(function(a, b) {
    a - b;
  });

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (sortedArray[i] > num) {
      sortedArray.splice(i, 0, num);
    }

    if (sortedArray[sortedArray.length - 1] < num) {
      sortedArray.splice(sortedArray.length, 0, num);
    }
  }
  return sortedArray.indexOf(num);
}

// Approach 2
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

/**
 * Mutations:
 * Return true if the string in the first element of
 * the array contains all of the letters of the string
 * in the second element of the array.
 */
function mutation(arr) {
  const firstStr = arr[0].toLowerCase().split("");
  const secondStr = arr[1].toLowerCase().split("");

  for (let i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) < 0) return false;
  }
  return true;
}

/**
 * Chunky Monkey:
 * Write a function that splits an array (first argument)
 * into groups the length of size (second argument) and
 * returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
  let splitedArray = [];
  for (var i = 0; i < arr.length; i += size) {
    splitedArray.push(arr.slice(i, i + size));
  }
  return splitedArray;
}
