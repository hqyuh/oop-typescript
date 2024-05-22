// T extends object
// this mean is T required to be an object
const merge = <T extends object, U extends object>(a: T, b: U) => {
  // Object.assign(target, ...sources)
  return Object.assign(a, b);
};

console.log(merge({ name: "HH" }, { age: 24 }));

interface Pair<T, U> {
  a: T;
  b: U;
}

function create<T, U>(a: T, b: U): Pair<T, U> {
  return { a, b };
}

console.log(create(1, "HH"));
