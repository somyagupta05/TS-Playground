"use strict";
// A class in terms  of oop is blueprint for creating objects
// in typescript there is a convention to use pascalcase(also known as uppercase) for class name . this means that class anme should start with a capital letter and each subsequent word in the class anme should also beigin with a capital letter 
// class Persons{
//   name:string="somya";
//   age:number=22;
//   hobbies:string[]=["reading","painting"];
// }
// const person1:Persons=new Persons();
// console.log(person1.hobbies)
class Persons {
    constructor(names, age, hobbies) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person1 = new Persons("somya", 12, ["playing"]);
const person2 = new Persons("gupta", 12, ["playing", "reading"]);
console.log(person1.hobbies);
console.log(person2.hobbies);
