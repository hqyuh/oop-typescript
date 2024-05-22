type A = {
  name: string;
};

type B = {
  age: number;
};

type People = A & B;

const people: People = {
  name: "John",
  age: 30,
};

// if 2 types have the same name key, that key will be never
type C = {
  name: "C";
};

type D = {
  name: "D";
};

type Student = C & D; // never
// const student: Student = {
//     name: 'Student'
// }
