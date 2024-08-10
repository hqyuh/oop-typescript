class Person {
    constructor(name) {
        // instance properties
        this.name = name;
    }
}

const john = new Person("John");
// Step create 
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(john instanceof Person);

// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(this.name);
}
john.calcAge();

console.log(john.__proto__); // __proto__ created from step 3.
console.log(Person.prototype.isPrototypeOf(john));

console.log(john.hasOwnProperty("name"));

console.log(Object.prototype);

console.dir(Person.prototype.constructor);


const arr = [3, 6, 3, 6];
Array.prototype.unique = function () {
    return [...new Set(this)]; // => 'this' is arr
};

console.log(arr.unique());