// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;

      return digits;
    } else {
      digits[i] = 0;
    }
  }

  return [1, ...digits];
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9]));
