"use strict";
// generics in typescript allow you to create reusable components or function that can work with multiple data types.
// function logAndReturn(value:number |string ): number | string{
//   console.log(value);
//   return value;
// }
// const numberResult:string | number =logAndReturn(42);
// const stringResult:string | number =logAndReturn("hello, generics");
// const booleanResult:string | number=logAndReturn(true)
// console.log(numberResult);
// console.log(stringResult);
// T is typescript here you can also write Type or also you can write anything but it should be same everywhere instead of T
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("hello, generics");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
