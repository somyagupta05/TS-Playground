"use strict";
// String intialization:
// 1. declare a variable message of type string and assign it the value "hello, typescript"
let message = "hello typescipt";
// 2. create two variables firstname and lastname of type string and assign them your first name and last name, concatenate two variables to store the result in a variable called fullname
let firstname = "somya";
let lastname = "gupta";
let myName = firstname + lastname;
console.log(myName);
// 3. declare a variable sentence of type string and assign it a sentence of your choice find the length of the string and store it in a a variable called sentencelength.
let sentence = "i am good";
let sentencelength = sentence.length;
console.log(sentencelength);
// 4. declare a variable sentence of type string and assign it a sentence of your choice. convert the entire sentence to uppercase and store the result in a variable called uppercasetext. then convert the entire sentence to lowercase and store the result in a variable called lowercasetext.
let text = "i am good";
let uppercasetext = text.toUpperCase();
let lowercasetext = text.toLowerCase();
console.log(uppercasetext);
console.log(lowercasetext);
// 5: Substring:
let longText = "This is a long sentence.";
let shortText = longText.substring(0, 10);
// 6: String Comparison:
let str1 = "Hello";
let str2 = "World";
let areEqual = str1 === str2;
// 7: String Template:
let product = "Phone";
let price = 500;
let messsage = `The product ${product} is priced at ${price} dollars.`;
// .................................
// functions
// 1.palindrome
const ispalindrome = (palin) => {
    let myPlain = palin.split("").reverse().join("");
    return myPlain === palin;
};
console.log(ispalindrome("12321"));
// interference
let mssg = "Hello, TypeScript!";
console.log(mssg);
// The compiler infers the type string.
function calculateArea(len, wid) {
    return len * wid;
}
const result = calculateArea(10, 5);
console.log(result);
// The compiler infers the type number.
