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


function logAndReturn<T>(value:T):T{
    
    return value;
  }

  const numberResult:42 =logAndReturn(42);
  const stringResult:"hello, generics" =logAndReturn("hello, generics");
  const booleanResult:true=logAndReturn(true)
  
  console.log(numberResult);
  console.log(stringResult);
  console.log(booleanResult);