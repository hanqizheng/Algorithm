var maxSubArray = function (nums) {
  if (!nums.length) return 0

  let dp = []
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    console.log(dp[i - 1])
    if (dp[i - 1] <= 0) {
      dp[i] = nums[i]
    }
    else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }

  return dp
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))