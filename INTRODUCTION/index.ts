console.log("i am somya");
var num:number=5 

// num="somya"  ....will give error as num is defined as number not string

num=55;

// to add to number


// fun define
// @ts-ignore
function Sum(a:number,b:number):number
{
  return a+b
}

// fun call
console.log(Sum(5,5));