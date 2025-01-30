// abstract classes provide a way to define common properties and methods that multiple derived classes can share. This process code reuse and helps establish a common interface for related class

// abstract class focus on class inheritance and sharing common functionality
// whereas the useContext hook in react on managing global state and allowing components to consume that state.

abstract class Shape{
  constructor(protected color:string){}
  abstract calculateArea():number;
  abstract displayArea:()=>void;
} 


class Circle extends Shape{
  constructor(protected color:string, protected radius:number) {
    super(color);
  }
  public calculateArea():number{
    return Math.PI*this.radius*this.radius
  }
  displayArea: () => void=(): void=>{
  console.log(`this is ${this.color} circle with radius ${this.radius}`)
  };
}

const circle =new Circle("Red",5);
console.log(circle.calculateArea());
circle.displayArea;
