// in Typescript static method and properties belong to class itself rather than to instances of the class. by making methods and properties static, we can access directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that dony rely on instance-specific data.



// Math operations utility - creating a utility class to perform various mathematical operations

class MathOperations{
  public static PI: number=Math.PI;
  public static add(num1:number,num2:number):number{
    return num1+num2;
  }
  public static sub(num1:number,num2:number):number{
    return num1-num2;
  }
}
console.log(MathOperations.PI)
console.log(MathOperations.add(2,3));
console.log(MathOperations.sub(10,4));