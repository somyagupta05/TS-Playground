// for loop
const fruit:string[]=["apple","banana","ornage","papaya"];
for(let i=0;i<fruit.length;i++)
{
  console.log(fruit[i])
}

// for of loop

const fruit1:string[]=["apple","banana","ornage","papaya"];
for(const fruit of fruit1)
{
  console.log(fruit)
}

// for each
const fruit2:string[]=["apple","banana","ornage","papaya"];
fruit2.forEach((curVal:string)=>console.log(curVal))