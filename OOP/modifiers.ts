  // parent class    child class    outside class 
//public  yes               yes           yes
//protected  yes            yes           no
//private     yes           no            no

class Person1 {
  public name: string; // Public - accessible anywhere
  protected age: number; // Protected - accessible in Person and subclasses
  private hobbies: string[]; // Private - accessible only in Person

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  public introduce(): string { // Public method - accessible anywhere
    return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
  }

  
}

class Student1 extends Person1 {
  private grade: number; // Private - only accessible within Student

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  public introduce(): string { // Overrides the introduce method
    return `${super.introduce()} I am in grade ${this.grade}.`;
  }

}
const student1 = new Student1("Somya", 12, ["playing", "reading"], 7);
console.log(student1.introduce()); // Accessible

