"use strict";
// use custom types when you need unions, intersections, or mapped types
// use interfaces when defining object shapes or classes that adhere to a contract.
;
;
// const bioData:Data= {
//   name:"somya",
//   city:"pune",
//   state:"mp",
//   age:22,
// }
class BioData {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const std1 = new BioData("somya", 23, "pune", "mp");
console.log(std1);
