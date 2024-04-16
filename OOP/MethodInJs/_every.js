// every
// This method checks every element in the array that passes the condition, returning true or false as appropriate.

const arr = [1, 2, 3, 4, 5, 6, 7];
const greater5 = arr.every(x => x > 5);
console.log(greater5);

const less9 = arr.every(x => x < 9);
console.log(less9)

