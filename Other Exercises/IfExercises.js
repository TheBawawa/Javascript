//Exercise 1
var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension.");
}
else if (age < 65 && age >= 18) {
  console.log("Each month you get salary.");
}
else if (age < 18) {
  console.log("You get allowance.");
}
else {
  console.log("The value of age variable is not numerical.");
}

//Exercise 2
var day = "Sunday";

switch(day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thrusday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Do something");
    break;
  
  default:
    console.log("There is no such day");
    break;
}