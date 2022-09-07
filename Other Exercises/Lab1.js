var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

const animal = {
  canJump: true
  }; 

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

//Task 1
function logDairy() {
  for (var i = 0; i <dairy.length; i++) {
    console.log (dairy[i]);
  }
}
//logDairy()

//Task 2
function birdCan() {
  for ([x,y] of Object.entries(bird)) {
    console.log(`${x}: ${y}`);
  }
}
//birdCan()

//Task 3
function animalCan() {
  for ( const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}
//animalCan()