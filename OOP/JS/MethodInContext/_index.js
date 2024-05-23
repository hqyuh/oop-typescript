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
console.log(mySelf());

// Fix
const mySelf1 = obj.getLocation.bind(obj);
console.log(mySelf1());

//------------------------------------------------------------//
// call 
let personCall = { name: "Call" };
function sayCall(a, b) {
  console.log(personCall, a, b);
}
sayCall.call(personCall, 1, 2);

// apply
let personApply = { name: "Apply" };
function sayApply(a, b) {
  console.log(personApply, a, b);
}
sayApply.apply(personApply, [1, 2]);

// bind
let personBind = { name: "Bind" };
function sayBind(a, b) {
  console.log(personBind, a, b);
};
let person = sayBind.bind(personBind, 1, 2);
person();
