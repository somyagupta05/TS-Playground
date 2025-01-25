"use strict";
// an interface is powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate and javascript code at runtime.
const product1 = {
    name: 'somya',
    price: 1000,
    quantity: 5
};
const product2 = {
    name: 'somya',
    price: 2000,
    quantity: 5
};
const calculatePrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculatePrice(product1));
console.log(calculatePrice(product2));
