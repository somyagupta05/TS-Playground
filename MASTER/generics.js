"use strict";
// generics in typescript allow you to create reusable components or function that can work with multiple data types.
function logAndReturn(value) {
    console.log(value);
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("hello, generics");
console.log(numberResult);
console.log(stringResult);
