// proxy is a wrapper around an object or function that can intercept (chặn) and redefine (định nghĩa lại)
// fundamental (cơ bản) operations (hoạt động) of the object or function.

const student = {
  name: "John",
  age: 12,
};

const proxy = new Proxy(student, {
  set(target, prop, value) {
    if (prop === "age") {
      if (value < 0) {
        throw new Error("Invalid age");
      }
    }
    target[prop] = value;
  },
  get(target, prop) {
    if (prop === "group") {
      throw new Error("Invalid property");
    }

    return target[prop];
  },
  deleteProperty(target, prop) {
    if (prop === "name") {
      throw new Error("Cannot delete name");
    }
    delete target[prop];
  },
  has(target, prop) {
    return prop in target;
  },
});

proxy["age"] = 12;
console.log(proxy.group); // Error: Invalid property
delete proxy.name; // Error: Cannot delete name
console.log("name" in proxy); // true

//==================================================================================================//

function multi(...arg) {
  console.log(arg);

  return arg.reduce((a, b) => a + b);
}

const proxy1 = new Proxy(multi, {
  apply(target, _thisArg, argArray) {
    return target(...argArray) * 2;
  },
});

console.log(proxy1(1, 2, 3, 4));
