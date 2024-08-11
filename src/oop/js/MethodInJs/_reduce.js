// reduce
// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
