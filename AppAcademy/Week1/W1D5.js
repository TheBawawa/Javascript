
//isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
// HINT: use indexOf

function isInside(array, ele) {
    return array.indexOf(ele) > -1;
}
//console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'));
//console.log(isInside(['chase', 'phi', 'eliot'], 'fred'));


//reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.

function reverseStr(str) {
    arraystr = str.split('');
    newarray = [];
    for (let i = arraystr.length; i >= 0; i--) {
        newarray.push(arraystr[i]);
    }
    newstr = newarray.join('');
    console.log(newstr);
}
//reverseStr('bootcamp');
//reverseStr('App Academy');


//luckySevens
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
function luckySevens(max) {
    let seven_divisible = [];
    for (let i = 1; i <= max; i++) {
        if (i % 7 === 0) {
            seven_divisible.push(i);
        }
    }
    console.log(seven_divisible);
}
//luckySevens(25);
//luckySevens(42);


//copyMachine
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.

function copyMachine(element, num) {
    copyarray = [];
    for (let i = 0; i < num; i++) {
        copyarray.push(element);
    }
    console.log(copyarray);
}
//copyMachine('candy', 0);
//copyMachine('candy', 2);
//copyMachine('bread', 4);


//everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.

function everyOtherWord(sentence) {
    arraysent = sentence.split(' ');
    newarray = []
    for (let i = 0; i <arraysent.length; i += 2) {
        newarray.push(arraysent[i]);
    }
    console.log(newarray);
}
//everyOtherWord('hello how are you doing on this lovely day?');
//everyOtherWord('the weather is wonderful');


//wordYeller
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"

function endsInPunc(str) {
    let puncs = [".", ",", "?", ";", "!", ":"]
    let lastChar = str[str.length - 1];
    return puncs.indexOf(lastChar) > -1;
}

function wordYeller(sentence) {
    let words = sentence.split(' ');
    let newarray = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (endsInPunc(word)) {
            newarray.push(word);
            }
        else {
            let newWord = word + '!';
            newarray.push(newWord);
        }
    }

    let newsent = newarray.join(' ')
    console.log(newsent)
}
//wordYeller("Stop it now! Please, wont you stop?");
//wordYeller("Go to the store and grab the following: milk, bread, run, and cake");


//arraySubstring
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.

function arraySubstring(words, str) {
    let answer = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(str)) {
            answer.push(false);
        }
        else {
            answer.push(true);
        }
    }
    console.log(answer);
}
//arraySubstring(["hello", "history", "helix", "hellos"],"hel") // => [true, false, true, true]
//arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre") // => [true, false, false, true]


//evenCaps
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.

function evenCaps(sentence) {
    let letters = sentence.split("")
    let newletters = [];
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            newletters.push(letters[i].toUpperCase());
        }
        else if (i % 2 === 0) {
            newletters.push(letters[i].toUpperCase());
        }
        else {
            newletters.push(letters[i]);
        }
    }
    let newSentence = newletters.join("");
    console.log(newSentence);
}
//evenCaps("Tom got a small piece of pie") // => "ToM GoT A SmAlL PiEcE Of pIe"
//evenCaps("the book is in front of the table") // => "ThE BoOk iS In fRoNt oF ThE TaBlE"