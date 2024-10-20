// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let number = x;
  let result = 0;

  while (number !== 0) {
    const surplus = number % 10;

    result = result * 10 + surplus;

    number = Math.floor(number / 10);
  }

  console.log(result);

  return x === result;
}

console.log(isPalindrome(121));
