class Personss {
constructor(
  public name: string,
  public age: number,
  protected hobbies: string[],

)

  {}

  introduce(): string {
    return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
  }
}

class Studentss extends Personss {

  constructor(name: string, age: number, hobbies: string[], public grade: number) {
    super(name, age, hobbies); // Call the parent class constructor
    this.grade = grade; // Assign the additional property
  }
  introduce(): string {
    return `${super.introduce()}. I am in grade ${this.grade}`;
  }}



const person33: Personss = new Personss("Somya", 12, ["playing"]);
const student11:Studentss = new Studentss("Gupta", 12, ["playing", "reading"],9);

console.log(person33.introduce());
console.log(student11.introduce());
