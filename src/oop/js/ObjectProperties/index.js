// https://homiedev.com/tim-hieu-object-properties-trong-javascript/

const objHere = {
  age: 29,
};

// change any attribute, use Object.defineProperty()
Object.defineProperty(objHere, "name", {
  value: "heh",
  enumerable: true,
  //   configurable: true,
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
