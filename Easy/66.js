// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。


var plusOne = function (digits) {
  let i = digits.length - 1
  while (i >= 0) {
    // 上来就+1，不管是题目要求的末尾+1还是产生进位的+1
    digits[i] += 1
    // 取余10等于0说明产生了进1，不等于0直接返回，没必要再加1了
    digits[i] = digits[i] % 10
    if (digits[i] !== 0) {
      return digits
    }
    i--
  }

  digits = [...new Array(digits.length + 1)].map(item => 0)
  digits[0] = 1

  return digits
};