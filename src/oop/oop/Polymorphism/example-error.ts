class A {
  show() {}
}

class B extends A {
  show() {}
  
  hello() {}
}

const a: A = new B();

a.show(); // OK
a.hello(); // ❌ TypeScript error
// Since TypeScript views the type of variable `a` as `A`
// But A does not have: hello