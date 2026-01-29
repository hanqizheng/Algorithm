/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // dp[i] 表示 0 ~ i 的子串对应的解法总数
  // dp[i] = dp[i] + (dp[i - 1] || dp[i - 2])
  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  // 如果开头是0，则无法解析
  dp[1] = s[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= s.length; i++) {
    const one = s[i - 1];
    const two = s.slice(i - 2, i);

    if (one >= "1" && one <= "9") {
      dp[i] += dp[i - 1];
    }

    if (two >= "10" && two <= "26") {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};
