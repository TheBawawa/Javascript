//Quick Test

4 + 4 / 2 //6

(2 + -7) * 3 //-15

101 % 10 //1

12 - 4 % 3 //11

true && false //False

true && !(false || false) //True

!true && !(false || false) //False

'cat' + 'dog' //'catdog'

2 + 'pizza' //Error ----- ('2pizza')

2.5 * 'fish' //Error

5 >= 11 //False

5 === 5.0 //False ------ (True)

7 !== 7.1 //True

5 + 5 > 8 //True

6 + 6 !== 12 //False

2 > 1 || false //True

'true' === true //False

10 % 2 === 0 //True

21 % 2 === 0 //False

21 % 2 !== 0 //True

21 % 2 === 1 //True

12 % 3 === 0 //True

9 % 3 === 0 //True

14 % 3 === 0 //False

'new york'[0] //'n'

'new york'[1] //'e'

'san francisco'[2 * 3] //'r' ----- 'a'

'bootcamp'[3].toUpperCase() //'T'

'bootcamp'.indexOf('T') //-1

'bootcamp'.indexOf('camp') //4:7 ------ 4

'bootcamp'.indexOf('o') > -1 //True

'science'.indexOf('x') === -1 //True


//Question 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10
idx * 2;
console.log(idx); // 20 --- 10

//Question 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // False
console.log(!isEven); // True

//Question 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // 'C'
var char = str2[num].toLowerCase(); // 'c'
console.log(char + '!'); // 'c!'

//Question 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // 'p'
console.log(sentence.indexOf(lastChar)); // 23 ---- 18

//Question 5
//Answer: 'younger than 30'
var age = 30; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}

//Question 6
//Answer: 'short string' && 'starts with p'
var str = 'pizza'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}

//Question 7
//Answer: 'divisible by 3'
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

//Question 8
//Answer: 'divisible by 3' && 'divisible by 5'
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}

//Question 9
//Answer: 'starts with a capital!' && 'ends with a capital!'
var str = 'App AcademY'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

//Question 10
//Answer: 'negative' && 'even'
var num = -44; // try different numbers here

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}