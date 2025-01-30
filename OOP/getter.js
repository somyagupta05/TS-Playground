"use strict";
// In typescript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of property, while setter allow you to set the value of a property with additional logic or validation. 
// get method doesn't take perameter but set method takes only one parameter.
class Personss1 {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
const person30 = new Personss1("Somya", ["playing"]);
person30.age = 56;
console.log(person30.introduce());
