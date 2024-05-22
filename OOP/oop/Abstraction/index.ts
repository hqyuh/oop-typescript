// Abstraction
// Can use abstract and interface can express abstraction

interface Wheel {
  wheel: number;
  getWheels(): void;
}

interface SteeringWheel {
  steeringWheel: number;
  getSteeringWheel(): void;
}

abstract class Car implements Wheel, SteeringWheel {
  protected constructor(
    private speed: number,
    public wheel: number,
    public steeringWheel: number,
  ) {
    this.speed = speed;
    this.wheel = wheel;
    this.steeringWheel = steeringWheel;
  }

  public accelerate(): void {
    this.speed += 1;
  }

  abstract getName(): string;

  getWheels(): void {
    console.log(this.wheel);
  }
  getSteeringWheel(): void {
    console.log(this.steeringWheel);
  }
}

class BMW extends Car {
  constructor(
    speed: number,
    wheel: number,
    steeringWheel: number,
    private readonly name: string,
  ) {
    super(speed, wheel, steeringWheel);
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const bmw = new BMW(10, 1, 1, "i8");

bmw.getSteeringWheel();
console.log(bmw.getName());
