"use strict";
//you use thr | (Pipe) symbol  to define a union type
// const inputValue=(value:string | number | boolean): void=>{};
// inputValue(55)
// inputValue("hello world")
// inputValue(true)
// que
const inputValue = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input data');
    }
};
// Function calls
console.log(inputValue(10));
console.log(inputValue("subscribe"));
