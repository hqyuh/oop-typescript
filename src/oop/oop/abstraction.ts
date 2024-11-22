abstract class Vehicle1 {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }

  startEngine(): void {
    console.log("Engine started");
  }

  abstract move(): void;
}

class Car1 extends Vehicle1 {
  numOfPassengers: number;

  constructor(wheels: number, numOfPassengers: number) {
    super(wheels);
    this.numOfPassengers = numOfPassengers;
  }

  move(): void {
    console.log(`Car is driving with ${this.numOfPassengers} passengers and ${this.wheels} wheels`);
  }
}

class Bike1 extends Vehicle1 {
  move(): void {
    console.log("Bike is riding");
  }
}

const car1 = new Car1(11, 12);

car1.startEngine();
car1.move();
