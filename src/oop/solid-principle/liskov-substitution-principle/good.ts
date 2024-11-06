interface BirdG {
  eat(): void;
}

interface FlyingBirdG extends BirdG {
  fly(): void;
}

class DuckG implements FlyingBirdG {
  eat() {
    console.log("Duck is eating");
  }

  fly() {
    console.log("Duck is flying");
  }
}

class OstrichG implements BirdG {
  eat() {
    console.log("Ostrich is eating");
  }
}
