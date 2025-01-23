// Enum in typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.


enum Roles{
  user="user",
  admin="admin",
}

type LoginDetails={
  name?:string;
  email:string;
  password:string;
  role:Roles;
}
const user1:LoginDetails={
  name:"somya",
  email:"somya@gmail.com",
  password:"asdf",
  role:Roles.admin
}

const user2:LoginDetails={
  email:"gupta@gmail.com",
  password:"asdf",
  role:Roles.user
}

const isAdmin = (user: LoginDetails): string => {
  const { name = "User", role } = user; 
  return role === Roles.admin 
    ? `${name} is allowed to edit the website`
    : `${name} is not allowed to edit the website`;
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));