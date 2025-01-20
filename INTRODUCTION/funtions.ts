function greet1(name:string, id:number){
  console.log(`welcome, ${name} and your id is ${id}`)
}
greet1("somya",1)


// fat arrow function
// const greet = (name: string, id: number) => {
//   console.log(`welcome, ${name} and your id is ${id}`);
// };

// greet("somya", 1);

// function return type
const greet = (name: string, id: number):string => {
  return `welcome, ${name} and your id is ${id}`;
};

const mygreet=greet("somya", 1); 
console.log(mygreet)

// ............................................
// parameters
// optional: parameters are denoted by appending a ? symbol after the parameter name.
// default: parameters are specified by providing a default value in the parameter declaration.


// default parameter
const greet3=(name:string,id:number=1):string=>{
  return `welcome , ${name} and ur id is ${id}`
}

const emp=greet3("somya");
console.log(emp)

// optional parameter
const greet4 = (name: string, id?: number): string => {
  if (id) {
    return `welcome, ${name} and your id is ${id}`;
  } else {
    return `welcome, ${name}`;
  }
};

const emp1 = greet4("somya"); // id is optional, not provided here
const emp3 = greet4("somya", 1); // id is provided as 1
console.log(emp1); // Output: welcome, somya
console.log(emp3); // Output: welcome, somya and your id is 1
