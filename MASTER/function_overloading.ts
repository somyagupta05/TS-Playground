function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any):any {
  return a+b;
}

const result1:number=add(5,10)
const result2:string=add("hello","world")