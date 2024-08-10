class A1 {
  print() {
    console.log("I'm A");
  }

  write() {
    console.log("A here");

    return new A1();
  }
}

class B1 extends A1 {
  print() {
    console.log("I'm B");
  }
}

new A1().write().print();
new B1().print();
