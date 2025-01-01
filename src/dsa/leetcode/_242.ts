// O(n*log(n) + m*log(m))

function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// O(2n)

/**
 * idea
 * Step 1: Loop through the first string and store the count of each character in a hashmap.
 * Step 2: Loop through the second string and decrement the count of each character in the hashmap.
 *      If the character is not in the hashmap, return false.
 *      Otherwise return true.
 */

interface IHashMap {
  [key: string]: number;
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hashMap: IHashMap = {};

  for (const c of s) {
    if (hashMap[c]) {
      hashMap[c]++;
    } else {
      hashMap[c] = 1;
    }
  }

  console.log(hashMap);

  for (const c of t) {
    if (hashMap[c]) {
      hashMap[c]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram2("anagram", "nagaram"));

// O(n + m)
/**
 * idea
 * Note this solution just use for lowercase letter
 * Step 1: Create an array of 26 elements to store the frequency of each letter in s
 * Step 2: Iterate through s and t, increment or decrement the frequency of each letter in the array
 * Step 3: Check if all elements in the array are 0 return true, otherwise return false
 *
 */

function isAnagram3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  console.log(arr);

  return arr.every((v) => v === 0);
}

console.log(isAnagram3("rat", "car"));
