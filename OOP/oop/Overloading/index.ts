class Calculation {
  private a: any;
  private b: any;

  constructor(a: any, b: any) {
    this.a = a;
    this.b = b;
  }

  add(): string;
  add(): number;
  add(): any {
    return this.a + this.b;
  }
}

console.log(typeof new Calculation(10, 20).add());
console.log(typeof new Calculation("1", "2").add());
