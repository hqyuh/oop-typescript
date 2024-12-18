/**
 * idea
 * 1. determines the maximum number in the array
 * 2. find sum of n natural numbers, use formula n * (n + 1) / 2
 * 3. find actual sum of the array
 * 4. return the difference between the sum of n natural numbers and the actual sum of the array
 */

function findMissingNumber(arr: number[]): number {
  const n = Math.max(...arr);
  const sum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 7, 8]));
