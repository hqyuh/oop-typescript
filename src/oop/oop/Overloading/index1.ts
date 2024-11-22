class Calculation1 {
  add(a: string, b: string): string;
  add(a: string, b: string, c: string): string;
  add(a: number, b: number): number;
  add(a: number, b: boolean): number;
  add(a: string, b: boolean): string;
  add(a: any, b: any, c?: any): any {
    return c && typeof c === "string" ? a + b + c : a + b;
  }
}

console.log(new Calculation1().add(1, 3));
console.log(new Calculation1().add("1", "3", "4"));
console.log(new Calculation1().add(1, true));
console.log(new Calculation1().add("1", true));
