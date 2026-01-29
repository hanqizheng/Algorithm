/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const max = new Array(nums.length);
  const min = new Array(nums.length);

  max[0] = nums[0];
  min[0] = nums[0];
  let ans = max[0];

  for (let i = 1; i < nums.length; i++) {
    max[i] = Math.max(nums[i], max[i - 1] * nums[i], min[i - 1] * nums[i]);
    min[i] = Math.min(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]);
    ans = Math.max(ans, max[i]);
  }

  return ans;
};
