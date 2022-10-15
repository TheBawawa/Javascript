/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function noVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.indexOf(char) === -1) {
            newStr += char;
        }
    }
    return newStr;
}


function abbreviate(sentence) {
    let words = sentence.split(" ");
    newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            let newWord = noVowels(word);
            newWords.push(newWord);
        }
        else {
            newWords.push(word);
        }
    }
    let newSent = newWords.join(" ")
    return newSent;
}
console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
