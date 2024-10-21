function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let kIndex = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[kIndex]) {
      kIndex++;
      nums[kIndex] = nums[i];
    }
  }

  return kIndex + 1;
}

console.log(removeDuplicates([1, 1, 2]));
