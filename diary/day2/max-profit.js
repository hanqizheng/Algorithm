/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 表示第 0 ～ i 天买入的最佳值（买入状态 + 买入值）
  const dp0 = []; // dp0[i] = max(dp0[i - 1], -prices[i]);
  // 表示第 0 ～ i 天能得到的最大收益值
  const dp1 = []; // dp1[i] = max(dp1[i - 1], prices[i] - dp0[i - 1]);

  dp0[0] = -prices[0];
  dp1[0] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp0[i] = Math.max(dp0[i - 1], -prices[i]);
    dp1[i] = Math.max(dp1[i - 1], prices[i] + dp0[i - 1]);
  }

  return dp1.sort((a, b) => b - a)[0];
};
