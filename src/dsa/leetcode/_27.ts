// https://leetcode.com/problems/remove-element
function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  let kIndex = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) {
      nums[kIndex] = nums[i];
      kIndex++;
    }
  }

  return kIndex;
}

console.log(removeElement([3, 2, 2, 3], 3));
