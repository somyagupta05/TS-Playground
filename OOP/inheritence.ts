// inheritence allows a class to reuse functionality of an existing class without rewriting it.

class Person {
  name: string;
  age: number;
  hobbies: string[];


  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
  }
}

class Student extends Person{}

class Teachers{}

const person3: Person = new Person("Somya", 12, ["playing"]);
const students1:Student = new Student("Gupta", 12, ["playing", "reading"]);

console.log(person3.introduce());
console.log(students1.introduce());
