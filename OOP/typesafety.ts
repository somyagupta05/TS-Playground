//  a typeof guard in typescript lets you narrow down the type of a variable based on its runtime value. In typescript , type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certian circumstances. This is particularly useful with unions types and generic types.

const favHobbies = (hobby: string | string[]): void => {
  if (typeof hobby === "object" && Array.isArray(hobby)) {
   
    hobby.map((h: string): void => {
      console.log(h); 
    });
  } else {
   
    console.log(hobby);
  }
}


favHobbies("coding"); 
favHobbies(["sleeping", "playing"]); 