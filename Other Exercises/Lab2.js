//Task 1
class Person {
    constructor(name = 'Tom',age = 20,energy = 100){
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep(){
        this.energy += 10
    }
    doSomethingFun(){
        this.energy -= 10
    }
}
let person1 = new Person()
//console.log(person1)

//Task 2

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp
        this.hourlyWage = this.hourlyWage
    }
    goToWork() {
        this.xp += 10;
    }
}
//console.log(worker1)

//Task 3
function intern() {
    let worker1 = new Worker('Bob', 21, 110)
    worker1.goToWork()
    return worker1
}

//Task 4
function manager() {
    let manager1 = new Worker('Alice', 20, 120, 100, 30)
    manager1.doSomethingFun()
    return manager1
}