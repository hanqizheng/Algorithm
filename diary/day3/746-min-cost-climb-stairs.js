/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp[i] 表示到达第 i 级台阶所需的最小花费
  // dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]
  const dp = [];

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  // 最后有可能是一步也有可能是两步到达顶端，所以要比较 dp[n-1] 和 dp[n-2]
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
