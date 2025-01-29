"use strict";
// In typescript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of property, while setter allow you to set the value of a property with additional logic or validation. 
class Personss1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        if (this.age > 150 || this.age < 0) {
            throw new Error("age is not valid");
        }
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
const person30 = new Personss1("Somya", 212, ["playing"]);
console.log(person30.introduce());
