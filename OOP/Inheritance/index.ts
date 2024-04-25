class ShapeV1 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    describe(): void {
        console.log(`This is a shape at position (${this.x}, ${this.y}).`);
    }
}

class CircleV1 extends ShapeV1 {
    radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y); // Call the constructor of the superclass (Shape)
        this.radius = radius;
    }

    // Method to calculate area of the circle
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new CircleV1(1, 2, 3);
circle.describe();
console.log(circle.area());
