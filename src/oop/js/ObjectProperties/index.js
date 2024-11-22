// https://homiedev.com/tim-hieu-object-properties-trong-javascript/

const objHere = {
  age: 29,
};

// change any attribute, use Object.defineProperty()
Object.defineProperty(objHere, "name", {
  value: "heh",
  enumerable: true,
  // configurable: true,
});

console.log("hh => ", objHere);

// if you want to know attribute 'name' exist or not
// use
console.log(Object.getOwnPropertyDescriptor(objHere, "name"));
console.log(Object.getOwnPropertyDescriptors(objHere));

// delete attribute
delete objHere.name; // can't delete, attribute configurable is false, if you want to delete, set configurable is true
console.log("🐔 =>  objHere:", objHere);

const objHere2 = {};

Object.defineProperties(objHere2, {
  name: {
    value: "hh",
    enumerable: true,
  },
  gender: {
    value: "male",
    enumerable: true,
  },
});

delete objHere2.name;

console.log("🐔 =>  objHere2:", objHere2);

// convert object to array
console.log(Object.entries(objHere2)); // output: [['name', 'hh'], ['gender', 'male']]

// get array value
console.log(Object.values(objHere2)); // output: ['hh', 'male']

// get array key
console.log(Object.keys(objHere2)); // output: ['name', 'gender']

// convert array to object
const arr = [
  ["name", "hh"],
  ["age", 24],
];

console.log(Object.fromEntries(arr));
// output: { name: 'hh', age: 24 }

//
console.log(Object.fromEntries(Object.entries(objHere2)));

// Object.seal(): Prevents adding or removing properties from an object but allows modifying existing properties.
const objHere3 = {
  a: 1,
};

Object.seal(objHere3);
console.log(Object.isSealed(objHere3));
objHere3.a = 2;
delete objHere3.a;
console.log(objHere3);

// Object.freeze(): Prevents adding, removing, or modifying properties of an object, making it completely immutable.
const frozenObj = Object.freeze({ b: 1 });

frozenObj.b = 2;
console.log(frozenObj);
