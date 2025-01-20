// map has some limitation like you want to calculate num greater than 3 then in case of map for [4,5,1,2] output will be ["True","true","false","false"] but this is not what we want so we will use filter to get exact values

const numbers1:number[]=[1,2,3,4,5]
const evennumber:number[]=numbers1.filter((curElm:number)=>curElm%2===0)
console.log(evennumber)

// filtering numbers greater than 3 
const numbergreater=numbers1.filter((currElem:number)=>currElem>3)
console.log(numbergreater)
