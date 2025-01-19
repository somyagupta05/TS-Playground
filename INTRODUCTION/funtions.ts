// function greet(name:string, id:number){
//   console.log(`welcome, ${name} and your id is ${id}`)
// }
// greet("somya",1)


// fat arrow function
// const greet = (name: string, id: number) => {
//   console.log(`welcome, ${name} and your id is ${id}`);
// };

// greet("somya", 1);

// function return type
const greet = (name: string, id: number):string => {
  return `welcome, ${name} and your id is ${id}`;
};

const mygreet=greet("somya", 1); 
console.log(mygreet)