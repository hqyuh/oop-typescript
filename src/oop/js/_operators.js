let a = 5;
let b = 10;

// Logical AND
// all true => true
// 1 false  => false

// Logical OR
// 1 true   => true
// all false => false

console.log(a != b && a < b);
console.log(a > b || a == b);
console.log(a < b || a == b);

//
// difference between ++a and a++
// ++a => increment first then use
// a++ => use first then increment
let c = 2;
console.log(c++); // 2
let d = 2;
console.log(++d); // 3
