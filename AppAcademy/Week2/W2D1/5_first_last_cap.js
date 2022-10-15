/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/
function FandLUpper(word) {
    newStr = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let newChar;
        if (i == 0 || i == word.length - 1) {
            newChar = char.toUpperCase();
        }
        else {
            newChar = char.toLowerCase();
        }
        newStr += newChar;
    }
    return newStr;
}


function firstLastCap(sentence) {
    let words = sentence.split(" ");
    newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord;
        newWord = FandLUpper(word);
        newWords.push(newWord);
    }
    let newSent = newWords.join(" ");
    console.log(newSent);
}
firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
