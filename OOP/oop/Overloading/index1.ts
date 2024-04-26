class Calculation1 {
    add(a:string, b:string):string;
    add(a:number, b:number): number;
    add(a: number, b: boolean): number;
    add(a: string, b: boolean): string;
    add(a: any, b:any): any {
    return a + b;
    }   
}

console.log(new Calculation1().add(1, 3));
console.log(new Calculation1().add('1', '3'));
console.log(new Calculation1().add(1, true));
console.log(new Calculation1().add('1', true));