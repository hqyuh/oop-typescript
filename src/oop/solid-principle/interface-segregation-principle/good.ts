interface WorkerG {
  work(): void;
}

interface EaterG {
  eat(): void;
}

class HumanG implements WorkerG, EaterG {
  work() {
    console.log("Human is working");
  }

  eat() {
    console.log("Human is eating");
  }
}

class RobotG implements WorkerG {
  work() {
    console.log("Robot is working");
  }
}
