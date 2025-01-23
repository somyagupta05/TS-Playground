"use strict";
// they allows you to store a fixed-size collection of elements of different types. they are similar to arrays, but with a key differences: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
// function
const displayPersonInfo = (person) => {
    const [name, age, haslicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Divers License :${haslicense ? "yes" : "no"}`);
};
const person5 = ['somya', 22, true];
const person6 = ['gupta', 22, false];
displayPersonInfo(person5);
displayPersonInfo(person6);
