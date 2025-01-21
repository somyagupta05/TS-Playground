// define an interace or type representing a product with properties for name, price,and quantity. create a product object with the following data:

type Product=
{
  name:string;
  price:number,
  quantity:number
}
const product:Product={
  name:"laptop",
  price:1000,
  quantity:5
}

// given the product object from the previous question write a function called calaculate totalprice  that claculates and retuens the total price (price*quantity) of the product

const calculateTotalPrice=(product:Product)=>{
  return `${product.name}'s total cost ${product.price*product.quantity} `
}
console.log(calculateTotalPrice(product))