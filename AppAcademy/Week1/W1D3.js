
//logBetween
/* Define a function `logBetween(lowNum, highNum)` that will print every number
from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
`lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
it does not need to return.*/

function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
      console.log(i);
    }
}
//logBetween(4,6);


//logBetweenStepper
// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.

function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}
//logBetweenStepper(-10, 15, 5)


//printFives
// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional

//1
function printFives(max) {
  for (let i = 0; i < max; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
//printFives(20)

//2
function printFivesV2(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
}
//printFivesV2(20)


//printReverse
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.

function printReverse(min, max) {
  for (let i = max - 1; i > min; i--) {
    console.log(i);
  }
}
//printReverse(13, 18);


//sumNums
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795
function sumNums(max) {
  let sum = 0
  for (let i = 0; i <= max; i++) {
    sum += i
  }
  console.log(sum);
}
//sumNums(4);


//isFactorOf
// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
function isFactorOf(number, factor) {
  if (number % factor == 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
//isFactorOf(6,2);
//isFactorOf(5,0);


//fizzBuzz
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      continue;
    }

    if (i % 3 == 0 || i % 5 == 0) {
      console.log(i);
    }
  }
}
//fizzBuzz(20);


//isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
//console.log(isPrime(2));
//console.log(isPrime(10));
//console.log(isPrime(9));
//console.log(isPrime(2017));


//Loop Muscle Memory
/*Practice typing the syntax for loops! **Type each snippet 5 times.** Focus on using
proper style and indentation. Be sure to test your code by running it after
each repetition. You'll be surprised and also annoyed at what details you missed!
Learn from those typos.*/

//1
function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}

function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}

function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}

function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}

function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}
//printForwards(4, 11); // feel free to change the numbers being passed

//2
function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}
//printBackwards(-5, 6); // feel free to change the numbers being passed


//How will these programs evaluate?
//Predict what will happen in the code below, and then run the code to find out!

//1
function func1(num) {
  return num + 50;
}

function func2(num) {
  return num + " bottles of beer on the wall";
}

function func3(num) {
  var x = func1(num);
  return func2(x);
}

var result = func3(5);
//console.log(result); // What does this print out? "55 bottles of beer on the wall"

//2
var foo = function(name) {
  return "Dance " + name + ", dance! "
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

var result = bar();
//console.log(result); // What does this print out? "Dance Anthony, dance! " "Dance Haseeb, dance! " "Dance Winnie, dance! " (x3)


//Debug The Programs
//The following functions don't give the expected output, can you spot the problems?


function sayHiNTimes(n) {
  var i = 0;
  while (i < n) {
    console.log("Hi");
    i++;
  }
}
//sayHiNTimes(3);


function isFive(n) {
  if (n == 5) {
    return true;
  } else {
    return false;
  }
}
//console.log(isFive(5));