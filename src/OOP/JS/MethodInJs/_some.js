// some
// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const arr = [1, 2, 3, 4, 5, 6, 7];
const greater5 = arr.some((x) => x > 5);
console.log(greater5);

const less0 = arr.some((x) => x <= 0);
console.log(less0);
