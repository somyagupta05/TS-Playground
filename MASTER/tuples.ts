// they allows you to store a fixed-size collection of elements of different types. they are similar to arrays, but with a key differences: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

// use when you are sure about data ki itna hi hoga ex name , age ....

type PersonInfo=readonly[string,number,boolean]

// function

const displayPersonInfo:(person:PersonInfo)=>void=(person:PersonInfo):void=>{
  const[name,age,haslicense]=person;
  console.log(`Name: ${name}, Age: ${age}, Divers License :${haslicense ? "yes":"no"}`)

}


const person5:PersonInfo=['somya',22,true];
const person6:PersonInfo=['gupta',22,false];

displayPersonInfo(person5);
displayPersonInfo(person6)