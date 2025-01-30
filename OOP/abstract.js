"use strict";
// abstract classes provide a way to define common properties and methods that multiple derived classes can share. This process code reuse and helps establish a common interface for related class
// abstract class focus on class inheritance and sharing common functionality
// whereas the useContext hook in react on managing global state and allowing components to consume that state.
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            console.log(`this is ${this.color} circle with radius ${this.radius}`);
        };
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("Red", 5);
console.log(circle.calculateArea());
circle.displayArea;
