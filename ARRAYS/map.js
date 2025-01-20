"use strict";
// the map methos creates a new array by applying a provided function to each element of the original array. it transfoms each element and returns a new array with the transformed values.
// double the ele of array 
const numbers = [1, 2, 3, 4, 5];
const doubledata = numbers.map((curVal) => curVal * 2);
console.log(doubledata);
// converting into string
const numberTostring = numbers.map((CurrElm) => CurrElm.toString());
console.log(numberTostring);
