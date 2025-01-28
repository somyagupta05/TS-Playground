"use strict";
// inheritence allows a class to reuse functionality of an existing class without rewriting it.
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
const person3 = new Person("Somya", 12, ["playing"]);
const person4 = new Person("Gupta", 12, ["playing", "reading"]);
console.log(person3.introduce());
console.log(person4.introduce());
