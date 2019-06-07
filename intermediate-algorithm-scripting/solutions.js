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
  const replaceSpecialChars = str.replace(/[^A-Z0-9]+/gi, " ");
  const spinalTapCase = replaceSpecialChars
    .split(/(?=[A-Z])/)
    .map(word => word.trim().toLowerCase())
    .join("-")
    .split(" ")
    .join("-");
  return spinalTapCase;
};

// Solution 2 <==== Not Mine ====>
const spinalCase = str => {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
};

// Solution 3 <==== Not Mine ====>
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
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
  if (firstVowel === null) return str + "ay";

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }

  return str + "way";
};
