/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = [];

  dp[0] = 0;

  if (n < 1) {
    return dp;
  }

  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // 把一个数右移一位（i >> 1），就是把二进制最后一位删掉。
    // 
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
};

/**
 * 
 *   ## 用具体数看：

  i = 13 (1101)

  - i >> 1 = 6 (110) → 1 的个数是 2
  - 最后一位是 1
  - 所以总数 = 2 + 1 = 3

  再看 i = 10 (1010)

  - i >> 1 = 5 (101) → 1 的个数是 2
  - 最后一位是 0
  - 所以总数 = 2 + 0 = 2
 */