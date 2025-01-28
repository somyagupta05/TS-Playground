"use strict";
// inheritence allows a class to reuse functionality of an existing class without rewriting it.
// in ts the super keyword is used in the context of class inheritence. it allows a subclass (also known as a derived class) to call methods or access properties of its superclass (also known as a base class). This is particularly useful when you want to extend  the behaviour of a parent class while still leveraging its existing functionality.
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
class Student extends Person {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies); // Call the parent class constructor
        this.grade = grade; // Assign the additional property
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}
class Teachers {
}
const person3 = new Person("Somya", 12, ["playing"]);
const students1 = new Student("Gupta", 12, ["playing", "reading"], 9);
console.log(person3.introduce());
console.log(students1.introduce());
