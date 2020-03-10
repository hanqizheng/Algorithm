// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 感觉技巧是先只考虑正数的情况，最后在判断x 是否 > 0转换正负即可

// 普通方法：把数字转成字符串然后对字符串进行操作
var reverse = function (x) {
  let value = Math.abs(x)

  let rev = parseInt(value.toString().split('').reverse().join(''))
  rev = x > 0 ? rev : - rev
  return (
      (rev > Math.pow(2, 31) - 1) || rev < -Math.pow(2, 31)
  ) ? 0 : rev
};


var reverse = function (x) {
  let rev = 0
  let value = Math.abs(x)
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = -Math.pow(2, 31)

  while (value !== 0) {
      const pop = value % 10

      if (
          (rev > Math.floor(INT_MAX / 10)) ||
          (rev === Math.floor(INT_MAX / 10) && pop > 7)
      )
          return 0

      if (
          rev < Math.floor(INT_MIN / 10) ||
          (rev === Math.floor(INT_MIN / 10) && pop < -8)
      )
          return 0

      rev = rev * 10 + pop

      value = Math.floor(value / 10)
  }

  return x > 0 ? rev : -rev
};
