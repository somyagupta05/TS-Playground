"use strict";
// Object that satisfies EmployeeDetails
const employee = {
    name: "Somya", // Matches 'Person' type
    age: 22, // Must be a number
    emp_id: 1111, // Matches 'Employee' type
    department: "IT", // Matches 'Employee' type
};
// Object that satisfies Person
const myPersonalInfo = {
    name: "Somya", // Matches 'Person' type
    age: 22, // Must be a number
};
// Output the results
console.log(employee);
console.log(myPersonalInfo);
