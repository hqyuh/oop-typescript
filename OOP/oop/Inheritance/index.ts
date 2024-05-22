class ShapeV1 {
  constructor(
    private x: number,
    private y: number,
  ) {
    this.x = x;
    this.y = y;
  }

  describe(): void {
    console.log(`This is a shape at position (${this.x}, ${this.y}).`);
  }
}

class CircleV1 extends ShapeV1 {
  constructor(
    x: number,
    y: number,
    private radius: number,
  ) {
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
