class A {
  show() {
    console.log("A");
  }
}

class B extends A {}

const a: A = new B();

a.show(); // A
// Since object B does not have its own show() method, JS continues searching. 
// => prototype chain.