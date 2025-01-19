// String intialization:
// 1. declare a variable message of type string and assign it the value "hello, typescript"

let message:string="hello typescipt";

// 2. create two variables firstname and lastname of type string and assign them your first name and last name, concatenate two variables to store the result in a variable called fullname

let firstname:string="somya";
let lastname:string="gupta";

let myName:string=firstname+lastname;
console.log(myName);

// 3. declare a variable sentence of type string and assign it a sentence of your choice find the length of the string and store it in a a variable called sentencelength.

let sentence:String="i am good"
let sentencelength:number=sentence.length;
console.log(sentencelength)

// 4. declare a variable sentence of type string and assign it a sentence of your choice. convert the entire sentence to uppercase and store the result in a variable called uppercasetext. then convert the entire sentence to lowercase and store the result in a variable called lowercasetext.
let text:String="i am good";
let uppercasetext:string=text.toUpperCase();
let lowercasetext:string=text.toLowerCase();
console.log(uppercasetext);
console.log(lowercasetext);


// 5: Substring:
let longText: string = "This is a long sentence.";
let shortText: string = longText.substring(0, 10);

// 6: String Comparison:
let str1: string = "Hello";
let str2: string = "World";
let areEqual: boolean = str1 === str2;

// 7: String Template:
let product: string = "Phone";
let price: number = 500;
let messsage: string = `The product ${product} is priced at ${price} dollars.`;


// .................................
// functions
// 1.palindrome
const ispalindrome=(palin:string):boolean=>{
  let myPlain=palin.split("").reverse().join("");
  return myPlain===palin
}
console.log(ispalindrome("12321"))