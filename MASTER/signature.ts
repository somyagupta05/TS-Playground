// the function call signature refers to the declaration of a function, which includes the functions name, parameters and return type. it defines the structure and type information of a function without including the functions implementation or body.

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // Method call signature
}

const student1: Student = {
  name: "somya",
  age: 22,
  greet: function(country: string): string {
    return `welcome my name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
  }
}

const student2: Student = {
  name: "gupta",
  age: 22,
  greet: function(country: string): string {
    return `welcome my name is ${student2.name}, I am ${student2.age} yrs old & I am from ${country}`;
  }
}

const introduction = (student1: Student): string => {
  const { name, age } = student1;
  return `welcome my name is ${name}, I am ${age} yrs old`;
}

// console.log(introduction(student1));
// console.log(introduction(student2));

console.log(student1.greet("India")); 
console.log(student2.greet("India"));
// Example of calling the greet method
