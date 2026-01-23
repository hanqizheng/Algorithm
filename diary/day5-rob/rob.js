/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[i] 表示当前 0 - i 的家舍中，能盗窃的最大金额
  // dp[i] = max(不偷当前这家， 偷当前这家)
  // dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

  const dp = [];

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
