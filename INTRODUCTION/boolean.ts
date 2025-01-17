let ismyname:boolean=true;
let isdone:boolean=true;
let hasstarted:boolean=false;

// write a Typescript function called isEven that takes a umber as a parameter and return true if the number is even and false otherwise.

function isEven(a:number):boolean{
  return a%2===0;
}

// fun call
console.log(isEven(5))