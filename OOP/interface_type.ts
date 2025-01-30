// use custom types when you need unions, intersections, or mapped types
// use interfaces when defining object shapes or classes that adhere to a contract.

// interfaces can extend other interfaces to inherit their members.
// custom types can use unions and intersections for more complex type compositions.

// type Stud={
//   name:string;
//   age:number;
// };
// type StudAddr={
//   city:string;
//   state:string;
// };

// type Data=Stud | StudAddr;

// const bioData:Stud | StudAddr ={
//   name:"somya",
//   city:"pune",
//   state:"mp"
// }

// console.log(bioData)



interface Stud {
  name:string;
  age:number;
};
interface StudAddr {
  city:string;
  state:string;
};

interface Data extends Stud , StudAddr {}

// const bioData:Data= {
//   name:"somya",
//   city:"pune",
//   state:"mp",
//   age:22,
// }

class BioData implements Data{
  constructor(
    public name:string,
    public age:number,
    public city:string,
    public state:string,
  ){}
}

const std1=new BioData("somya",23,"pune","mp")
console.log(std1)
