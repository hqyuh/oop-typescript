class A {
  name = "A";

  show() {
    console.log("A.show");
  }
}

class B extends A {
  name = "B";

  override show() {
    console.log("B.show");
  }
}

const a: A = new B();

console.log(a.name); // B
a.show(); // B.show

//
//            TypeScript
//                │
//       ┌────────┴────────┐
//       │                 │
//  compile-time       runtime
//       │                 │
//     A type          object B
//       │                 │
//       ▼                 ▼
//     a.show() ──────► B.show()
// 
// It has type A, but the actual object is B.
// The property is also retrieved from the runtime object