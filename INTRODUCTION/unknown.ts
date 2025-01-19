// the  unknown type is the safer alternative to any because it still enforces type checking and tyoe safety

// variables of type unknown can hold values of any types but you must perform type checks or type assertions before using them in specific ways.

let num2:unknown;
num2=5;
num2="somya"
num2=true

if(typeof num2==="number")
{
  console.log(num2+5)
}
else if(typeof num2==="boolean")
{
  console.log(num2);
}