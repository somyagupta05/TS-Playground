"use strict";
// the function call signature refers to the declaration of a function, which includes the functions name, parameters and return type. it defines the structure and type information of a function without including the functions implementation or body.
const student1 = {
    name: "somya",
    age: 22,
    greet: function (country) {
        return `welcome my name is ${this.name}, I am ${this.age} yrs old & I am from ${country}`;
    }
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `welcome my name is ${name}, I am ${age} yrs old`;
};
console.log(introduction(student1));
console.log(student1.greet("India")); // Example of calling the greet method
