class BirdB {
  fly() {
    console.log("Bird is flying");
  }
}

// Sparrow: chim sẻ
class SparrowB extends BirdB {}

// Ostrich: đà điểu
// BAD
class OstrichB extends BirdB {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}
