"use strict";
class Personss {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Studentss extends Personss {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies); // Call the parent class constructor
        this.grade = grade;
        this.grade = grade; // Assign the additional property
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}
const person33 = new Personss("Somya", 12, ["playing"]);
const student11 = new Studentss("Gupta", 12, ["playing", "reading"], 9);
console.log(person33.introduce());
console.log(student11.introduce());
