// Parent class
abstract class Shape {
    abstract calculateArea(): number;
}

// Rectangle class
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Circle class
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(private base: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}

// Function to calculate the area of any shape
function calculateShapeArea(shape: Shape): number {
    return shape.calculateArea();
}

// Creating instances of different shapes
const myRectangle = new Rectangle(5, 10);
const myCircle = new Circle(7);
const myTriangle = new Triangle(4, 6);

// Using the function with different shape objects
console.log(calculateShapeArea(myRectangle));
console.log(calculateShapeArea(myCircle));
console.log(calculateShapeArea(myTriangle));