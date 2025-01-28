"use strict";
// A class in terms  of oop is blueprint for creating objects
// in typescript there is a convention to use pascalcase(also known as uppercase) for class name . this means that class anme should start with a capital letter and each subsequent word in the class anme should also beigin with a capital letter 
class Persons {
    constructor() {
        this.name = "somya";
        this.age = 22;
        this.hobbies = ["reading", "painting"];
    }
}
const person1 = new Persons();
console.log(person1.hobbies);
