"use strict";
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;
// function add(a:any,b:any):any {
//   return a+b;
// }
// .................
//for both number or both string
// function add<T>(a:T,b:T):void{
// console.log(typeof a);
// console.log(typeof b);
// }
// const result1:void=add<number>(5,10)
// const result2:void=add("hello","world")
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(5, "somya");
const result2 = add("hello", 5);
