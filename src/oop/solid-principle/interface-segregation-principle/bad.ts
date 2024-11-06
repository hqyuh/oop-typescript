interface WorkerB {
  work(): void;

  eat(): void;
}

class HumanB implements WorkerB {
  work() {
    console.log("Human is working");
  }

  eat() {
    console.log("Human is eating");
  }
}

class RobotB implements WorkerB {
  work() {
    console.log("Robot is working");
  }

  // BAD
  eat() {
    throw new Error("Robot can't eat");
  }
}
