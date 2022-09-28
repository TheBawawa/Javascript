
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

//1
function isSubstring(searchString, subString) {
  if (searchString.toLowerCase().indexOf(subString.toLowerCase()) > -1){
    console.log(true);
  }
  else {
    console.log(false)
  }
}
//isSubstring("Jump for joy", "joys"); 
//isSubstring("Time to program", "time");

//2
function isSubstringV2(searchString, subString){
  return (searchString.toLowerCase().indexOf(subString.toLowerCase()) > -1)
}
//console.log(isSubstringV2("Time to program", "time"));
//console.log(isSubstringV2("Jump for joy", "joys"));

//echo
// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
  let caps = string.toUpperCase();
  let lower = string.toLowerCase();

  console.log(`${caps} ... ${string} ... ${lower}`);
}
//echo("JUMp");
//echo("Mom!");

//isEven

// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
function isEven(num) {
  if (num % 2 == 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
//isEven(2);
//isEven(5);

//averageOfFour
// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.

function averageOfFour(num1, num2, num3, num4){
  let average = (num1 + num2 + num3 + num4) / 4;
  console.log(average)
}
//averageOfFour(1, 2, 3, 4);
//averageOfFour(3, 10, 11, 4);

//Function Muscle Memory
//Practice typing the syntax for functions. **Type each snippet 10 times.** Focus on using
//proper style and indentation. Be sure to test your code by running it after
//each repetition. You'll be surprised and also annoyed at what details you missed!
//Learn from those typos.


function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

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

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}


function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

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

`1 + 1 * 5` //7

`(1 + 1) * 5` //10

`1 + 2 - 5 / 6 - 1` //1.167

`5 * 5 % 13` //4

`5/(-1 * (5 - (-10)))` //-0.33

//Truth Table
//Based on the values of A and B from the first two
//columns, complete the truth table. Check your work in the REPL.

   A   |   B   | A && B  | A &#124;&#124; B
-------|-------|---------|-----------------
 True  | True  |  True   |      True        
 True  | False |  False  |      True     
 False | True  |  False  |      True           
 False | False |  False  |      False    

 //Truthy or Falsey

//Predict whether these expressions evaluate to `true` or `false`. Check your work in the REPL.

`true && true || false` // True
`true && (false || true)` // True
`(true || false) && (false || false)` // False
`(true || false) || (false || false)` // True