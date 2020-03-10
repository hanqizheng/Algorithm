// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 普通方法，将其转化为字符串数组
var isPalindrome = function (x) {
  const tempArray = x.toString().split('')
  let count = 0

  for (let i = 0, j = tempArray.length - 1; i < j; i++, j--) {
    if (tempArray[i] !== tempArray[j]) break
    count++
  }

  return count === Math.floor(tempArray.length / 2) ? true : false
};

// 通过翻转数字比较翻转前后的结果
// 因为如果是回文数，翻转后的数应该等于翻转前的数
// 但是翻转会存在溢出的问题
// 所以这里只翻转这个数字长度的一半，比较翻转的数字和未翻转的数字是否相同就行了

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0))
    return false

  let revHalf = 0

  // 这句x > revHalf可以说是点睛
  // 我自己的理解是，如果一个数是回文数（这里分为奇数长度和偶数长度）
  // 它这个循环最后翻转的情况只有x 和 revHalf都是等长 || x 和 revHalf不等长
  // 不等长的情况下
  // 肯定是revHalf会比x多一位，一个n+1位数肯定会比一个n位数大，所以退出循环
  // 这时候如果是回文数，那么后续的判断中x === revHalf / 10就会触发
  // 等长的话
  // 如果他不是回文数，就会继续循环，然后变成不等长退出循环，最后无论是x直接和revHalf比较还是x和revHalf / 10比较都不会相等
  // 如果x本身是一个回文数，那么他又是等长，这时候x和revHalf是相等的，也会退出循环
  // 然后直接触发 x === revHalf
  while (x > revHalf) {
    revHalf = revHalf * 10 + x % 10
    x = Math.floor(x / 10)
  }

  // 这时候x === Math.floor(revHalf / 10)是为了防止奇数长的回文数退出循环后revHalf是带着中间那一位数字的，需要去掉
  return x === revHalf || x === Math.floor(revHalf / 10)
};