
type Personn = {
  name: string;
  age: number;
};


type Employee = {
  emp_id: number;
  department: string;
};


type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Somya",    
  age: 22,           
  emp_id: 1111,      
  department: "IT",   
};

const myPersonalInfo: Person = {
  name: "Somya",     
  age: 22,            
};


console.log(employee);
console.log(myPersonalInfo);
