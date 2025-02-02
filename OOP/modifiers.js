"use strict";
// parent class    child class    outside class 
//public  yes               yes           yes
//protected  yes            yes           no
//private     yes           no            no
class Person1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Student1 extends Person1 {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I am in grade ${this.grade}.`;
    }
}
const student1 = new Student1("Somya", 12, ["playing", "reading"], 7);
console.log(student1.introduce()); // Accessible
