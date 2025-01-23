// the function call signature refers to the declaration of a function, which includes the functions name, parameters and return type. it defines the structure and type information of a function without including the functions implementation or body.

type Student={
  name:String;
  age:number;
  gender?:string;
}
const student1:Student={
  name:"somya",
  age:22,
}

const introduction:(student1:Student)=>string=(student1:Student):string=>{
const {name,age}=student1;
return `welcome my name is ${name}, I am ${age} yrs old`
}
console.log(introduction(student1));