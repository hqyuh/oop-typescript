/* eslint-disable object-shorthand */
const obj = {
  location: "DN",
  getLocation: function (name, age) {
    return this.location;
  },
};

const mySelf = obj.getLocation;
// input here is undefined because the method obj.getLocation is assigned to the variable mySelf
// Ai this point, mySelf is just a reference to the getLocation function,
// but is not attached to the obj object

console.log(mySelf()); // => undefined => indirect
console.log(obj.getLocation()); // DN => direct

// Fix
const mySelf1 = obj.getLocation.bind(obj);

console.log(mySelf1());

//------------------------------------------------------------//
// const func1 = {};
// const func2 = func1.bind(obj);
// func2 => function () {
//   call func1 and set this to obj
// }
//------------------------------------------------------------//

// call
const personCall = { name: "Call" };

function sayCall(a, b) {
  console.log(personCall, a, b);
}

sayCall.call(personCall, 1, 2);

// apply
const personApply = { name: "Apply" };

function sayApply(a, b) {
  console.log(personApply, a, b);
}

sayApply.apply(personApply, [1, 2]);

// bind
const personBind = { name: "Bind" };

function sayBind(a, b) {
  console.log(personBind, a, b);
}

const person = sayBind.bind(personBind, 1, 2);

person();
