function isPalindrome(s: string): boolean {
  if (s.length === 0) return true;

  const str = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
