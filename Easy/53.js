

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。


// 贪心
var maxSubArray = function (nums) {
  let currentSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum)
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
};

// 动态规划
var maxSubArray = function (nums) {
  if (!nums.length) return 0

  const dp = []
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
  }

  return Math.max(...dp)
};