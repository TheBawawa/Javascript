//Arrays

//logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.

function logEach(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}
//logEach(["Anthony", "John", "Carson"]);


//range
// Write a function `range(start, end)` that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.

function range(start, end) {
    nums = [];
    for (let i = start; i <= end; i++) {
        nums.push(i);
    }
    return nums;
}
//console.log(range(1,4));
//console.log(range(4,2));


//sumArray
// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//console.log(sumArray([5, 6, 4]));
//console.log(sumArray([7, 3, 9, 11]));


//capWords
// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.

function capWords(words) {
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words;
}
//console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));


//wordPeriods
// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
function wordPeriods(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word + '.';

        newWords.push(newWord);
    }
    let newSen = newWords.join(' ');
    return newSen;
}
//console.log(wordPeriods('hello world'));


//maxValue
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.

function maxValue(array) {
    let largest = null

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (largest === null || array[i] > largest) {
            largest = num;
        }
    }
    return largest;
}
//console.log( maxValue([12, 6, 43, 2]));
//console.log(maxValue([]));


//myIndexOf
// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
// CONSTRAINT: Do not use the indexOf method.

function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num === target) {
            return i;
        }
    }
    return -1;
}
//console.log(myIndexOf([1,2,3,4],4));
//console.log(myIndexOf([5,6,7,8],2));


//factorArray
// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []
function factorArray(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//console.log(factorArray([2,3,4,5,6],20));
//console.log(factorArray([10,15,20,25],5));


//Array Muscle Memory
/*Practice typing the syntax for iterating through arrays. **Type each snippet 5 times each.**
Focus on proper style and indentation. Be sure to test your code by running it after
each repetition. You'll be surprised and also annoyed at what details you missed!
Learn from those typos.*/

//1
function printForwards(arr) {
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    console.log(ele);
  }
}
var alphabet = ['a', 'b', 'c', 'd', 'e'];

function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
}
var alphabet = ['a', 'b', 'c', 'd', 'e'];

function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
}
var alphabet = ['a', 'b', 'c', 'd', 'e'];

function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
}
var alphabet = ['a', 'b', 'c', 'd', 'e'];

function printForwards(arr) {
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    console.log(ele);
  }
}
var alphabet = ['a', 'b', 'c', 'd', 'e'];
//printForwards(alphabet);


//2
function printBackwards(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var ele = array[i];
    console.log(ele);
  }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
}
var names = ['kurstie', 'mike', 'alex', 'meagan'];
//printBackwards(names);
