
//isOdd
// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals

function isOdd(num) {
  if (num % 2 != 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
//isOdd(5);

//plusFive
// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.

function plusFive(num) {
  num += 5;
  console.log(num);
}
//plusFive(4);

//threeOrSeven
// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals

//1
function threeOrSeven(num) {
    if (num % 3 == 0) {
        return true;
    }
    else if (num % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//console.log(threeOrSeven(21));

//2
function threeOrSevenV2(num) {
    switch (num) {
        case num % 3 == 0 && num:
            return true;
            break;
        case num % 7 == 0 && num:
            return true;
            break;
        default:
            return false;
            break;
    }
}
//console.log(threeOrSevenV2(12));

//hello
// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log

function hello(str) { 
    console.log(`Hello, ${str}`);
}
//hello('Ana')

//yell
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.

function yell(string) {
  let yellstring = string.toUpperCase();
  return yellstring;
}
//console.log(yell('hi, my name is gaby'));

//whisper
// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.

function whisper(string) {
  let whisperstring = string.toLowerCase();
  console.log(`...${whisperstring}...`);
}
//whisper('wANNA hang Out?');

//isSubstring
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
    searchString = searchString.toLowerCase();
    subString = subString.toLowerCase();

  let listwords = searchString.split('');
  let sublist = subString.split('');
  let answer = false;

  let sublength = sublist.length;
  let listlength = listwords.length;

  for (let i = 0; i < sublength; i++) {
    for (let j = 0; j < listlength; j++) {
        if (listwords[i] === sublist[j]){
            answer = true;
        }
    }
  }
  console.log(answer);
  console.log(listwords);
  console.log(sublist);
}
isSubstring("Jump for joy", "joys");

//echo

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
  // your code here...
}


//isEven

// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
  // your code here...
}


//averageOfFour


// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5


//Function Muscle Memory

//Practice typing the syntax for functions. **Type each snippet 10 times.** Focus on using
//proper style and indentation. Be sure to test your code by running it after
//each repetition. You'll be surprised and also annoyed at what details you missed!
//Learn from those typos.


function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

//console.log(sayHello('bootcamp prep')); // feel free to change the string being passed


function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

//console.log(checkNumber(5)); // feel free to change the number being passed


//Thinking Problems

//These next few problems won't require you to write code, but it will help your understandng of JavaScript.

//Order of Operations

//Evaluate each expression. Check your answer in the Node REPL.
