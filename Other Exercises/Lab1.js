var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

//Task 1
function logDairy() {
  for (var i = 0; i <dairy.length; i++) {
    console.log (dairy[i]);
  }
}
//logDairy()

const animal = {
  canJump: true
  }; 

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

//Task 2
function birdCan() {
  for ( const key in bird) {
    console.log(`${key}: ${bird[key]}`); 
  }
}
birdCan()

//Task 3
