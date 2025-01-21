// object are used to represent data with key value pairs  each key in the object is a string that maps to a value.

// real life example of persons information like going to shcool

const person1={
  name:"somya",
  age:22,
  isStudent:true,
  address:{
    city:"Pune",
    country:"India"
  }

}

console.log(person1.address.country)

// update data
person1.address.country="nepal";
console.log(person1.address.country)


// defining object

const person:
{
name:string,
age:number,
isStudent:boolean,
address:{city:string;country:string}
}
 = {


  name:"somya",
  age:22,
  isStudent:true,
  address:{
    city:"Pune",
    country:"India"
  }

}

console.log(person.address.country)

// update data
person.address.country="nepal";
console.log(person.address.country)