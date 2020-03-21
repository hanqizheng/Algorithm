// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

var addBinary = function (a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0) {
    // 每次上来sum表示对应位置的两个二进制数相加的结果
    // 让sum一上来等于carry是要让上一次运算的进位也算在这次的运算中，第一次carry默认为0
    let sum = carry

    // 开始运算对应位置的连个数字相加，这里判断小于0的情况时可能一个字符串比较短，用0补齐
    sum += i < 0 ? 0 : parseInt(a[i])
    sum += j < 0 ? 0 : parseInt(b[j])

    result += sum % 2
    carry = sum >> 1

    j--
    i--
  }
  result += carry ? carry : ''
  return result.split('').reverse().join('')
}