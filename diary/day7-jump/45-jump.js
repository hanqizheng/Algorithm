/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // dp[i] 表示到达 i 位置所需的最小步数
  // 到达 i 一定是从上一步， 某个 j 的位置，再跳了 1 次到达的（跳 1 次不是跳 1 步）
  // 所以。 dp[i] = dp[j] + 1
  // 但由于 j 是一个数字，一个范围，可能有多种情况，所以应该取 到底 dp[j] 最小的一个再 + 1

  const len = nums.length;

  const dp = new Array(len).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < len; i++) {
    for (j = 0; j < i; j++) {
      if (dp[j] !== Infinity && nums[j] + j >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[len - 1];
};
