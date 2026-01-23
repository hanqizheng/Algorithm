var massage = function (nums) {
  // dp[i] 状态表示 0 - i 能偷到的最大金额
  // 在第 i 个位置，有打劫或不打劫两种选择
  // 打劫，则需要把 nums[i] 算入 -> dp[i - 2] + nums[i]
  // 不打劫 就直接是 dp[i - 1]

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
