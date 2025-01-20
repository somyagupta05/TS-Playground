"use strict";
// for loop
const fruit = ["apple", "banana", "ornage", "papaya"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
// for of loop
const fruit1 = ["apple", "banana", "ornage", "papaya"];
for (const fruit of fruit1) {
    console.log(fruit);
}
// for each
const fruit2 = ["apple", "banana", "ornage", "papaya"];
fruit2.forEach((curVal) => console.log(curVal));
