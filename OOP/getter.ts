// In typescript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of property, while setter allow you to set the value of a property with additional logic or validation. 

class Personss1 {
  constructor(
    public name: string,
    public age: number,
    protected hobbies: string[],
  
  )
  
    {if(this.age>150 || this.age<0){
      throw new Error("age is not valid")
    }}
  
    introduce(): string {
      return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
  }
  
  
  
  
  const person30: Personss1 = new Personss1("Somya", 212, ["playing"]);

  
  console.log(person30.introduce());

  