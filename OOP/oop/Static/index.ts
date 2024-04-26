// static
// The static of a class are accessed using the class name and dot notation, without creating an object

class CircleA2 {
    static pi: number = 3.14;
    
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number { 
        return 2 * CircleA2.pi * radius;
    }
}
CircleA2.pi;
CircleA2.calculateArea(5);

// non-static
let circleA2 = new CircleA2();
circleA2.calculateCircumference(5);
