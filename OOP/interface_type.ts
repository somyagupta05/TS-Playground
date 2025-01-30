// use custom types when you need unions, intersections, or mapped types
// use interfaces when defining object shapes or classes that adhere to a contract.

// interfaces can extend other interfaces to inherit their members.
// custom types can use sunions and intersections for more complex type compositions.

type Stud={
  name:string;
  age:number;
};
type StudAddr={
  city:string;
  state:string;
};

type Data=Stud | StudAddr;

const bioData:Stud | StudAddr ={
  name:"somya",
  city:"pune",
  state:"mp"
}

console.log(bioData)