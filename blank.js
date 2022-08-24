for (var i = 0; i<5; i++) {
  console.log("Hello World")
}

var numbers = [1, 2, 3, 4, 5]

for (var i=0; i<numbers.length; i++) {
  console.log(numbers[i])
}

for (x of numbers) {
  console.log(x)
}

let multiline = `
This is a multiline
string?
yes`;

console.log(multiline)

var name = "Rex";
var age = 22;

console.log(` ${name} is ${age} years old`);


