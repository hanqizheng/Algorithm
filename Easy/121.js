// 121. 买卖股票的最佳时机
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。



// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。




//暴力法
var maxProfit = function (prices) {
  let result = 0
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const temp = prices[j] - prices[i]
      if (temp > 0) {
        result = Math.max(result, temp)
      }
    }
  }

  return result
};

// 只需要循环一边数组
// 如果当前元素比最小还小，那就将其变为最小
// 反之去让当前元素减最小得到的结果和最大(也就是result)比较

var maxProfit = function (prices) {
  let result = 0
  let minPrice = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= minPrice) {
      minPrice = prices[i]
    } else {
      result = Math.max(result, prices[i] - minPrice)
    }
  }

  return result
};
