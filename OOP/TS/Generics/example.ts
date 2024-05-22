class HoldAnyThing<T> {
  constructor(public data: T[]) {}

  add(a: T) {
    this.data.push(a);

    return this.data;
  }

  get(index: number): T {
    return this.data[index];
  }
}

const holdNumber = new HoldAnyThing<number>([10, 20, 30]);

holdNumber.add(10);
console.log(holdNumber.get(2));
