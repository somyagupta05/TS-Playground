// an interface is powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate and javascript code at runtime.


interface Product4{
  name:string;
  price:number
  quantity:number

}
const product1:Product4={
  name:'somya',
 price:1000,
 quantity:5
  
}
const product2:Product4={
  name:'somya',
 price:2000,
 quantity:5
  
}

const  calculatePrice:(product:Product4)=>number=(product:Product4):number=>{
  const{price,quantity}=product;
  return price*quantity
}
console.log(calculatePrice(product1))
console.log(calculatePrice(product2))