//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
let stringArray:string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

let uppercaseArray = stringArray.map((name) => name.toUpperCase());

console.log(uppercaseArray);


//? 2: Given an array of numbers, create a new array that contains the square of each number.

let numbersArray:number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numbersArray.map((number) => number * number);

console.log(squaredNumbers);

//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.

const names1: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

let filterNames = names1.filter((name) => name.length > 4);

console.log(filterNames);

//? 2: Given an array of strings, filter out the names that start with the letter "A".



const startWithA:string[] = stringArray.filter((name) => name.startsWith("A"));

console.log(startWithA);

// Question 1


var calculateAverage = (numbers:any)=>{
    let average:number  = 0;
    average += numbers.map((currentVal:number)=>{
        currentVal/numbers.length;
    })
    return average;

}

console.log(calculateAverage([2,21,4,1,5,72]));


// Question 2

const findMaxValue = (numbers:any):number =>{
    let maximumValue:number = 0
    for(let i:number=0; i<numbers.length; i++){
        if (maximumValue < numbers[i]){
            maximumValue = numbers[i];
        }
    }
    return maximumValue

}

console.log(findMaxValue([4,2,42,2,3]));
