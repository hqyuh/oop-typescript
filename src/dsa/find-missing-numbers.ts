/**
 * idea
 * 1. determines the maximum number in the array
 * 2. create an array of n natural numbers
 * 3. filter the array of n natural numbers to find the missing numbers
 * 4. return the missing numbers
 */

function findMissingNumbers(arr: number[]): number[] {
  const n = Math.max(...arr);

  const arrFull = Array.from({ length: n }, (_, i) => i + 1);

  const missingNumbers = arrFull.filter((num) => !arr.includes(num));

  return missingNumbers;
}

console.log(findMissingNumbers([1, 4, 5, 8]));
