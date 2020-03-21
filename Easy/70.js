// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 暴力递归，这个方法不知道对不对，因为leetcode显示超时。。。
var climbStairs = function (n) {
  return climb(0, n)
};

function climb(i, n) {
  if (i > n) return 0
  if (i === n) return 1

  return climb(i + 1, n) + climb(i + 2, n)
}

// 动态规划
// 问题可以拆分成 n-1 和 n-2的子问题的和

var climbStairs = function (n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};



