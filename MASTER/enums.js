"use strict";
// Enum in typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "somya",
    email: "somya@gmail.com",
    password: "asdf",
    role: Roles.admin
};
const user2 = {
    email: "gupta@gmail.com",
    password: "asdf",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name = "User", role } = user;
    return role === Roles.admin
        ? `${name} is allowed to edit the website`
        : `${name} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
