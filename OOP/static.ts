// in Typescript static method and properties belong to class itself rather than to instances of the class. by making methods and properties static, we can access directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that dony rely on instance-specific data.

class Pperson{
 constructor( public name:string) {}
}

const user1=new Pperson("somya")