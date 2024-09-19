/* eslint-disable @typescript-eslint/ban-types */
let obj1: Object = {};

obj1 = 1;
obj1 = true;

console.log(obj1.toString());

// ❌
// const temporary: boolean = obj1;

let obj2: object = {};

obj2 = {};

obj2 = [];

obj2 = () => {};

// Object include primitive data type and common properties (toString(), valueOf(), etc..) and cannot be assigned back
// object not included primitive data type and common properties but it have non-primitive data type ({}, [], () => {}) and cannot be assigned back
// {} same as Object

let obj3: {} = {};

obj3 = 1;

console.log(obj3.toString());
console.log(obj3.valueOf());
