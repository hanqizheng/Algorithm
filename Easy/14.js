
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。





var longestCommonPrefix = function(strs) {
  // 先考虑空数组情况
  if (strs === '' || strs.length === 0) {
      return ''
  }

  let answer = strs[0]

  for (let i = 1; i < strs.length; i++) {
      // 这个j代表对比两个字符串移动下标的指针(不是那种指针)
      let j = 0
      while (j < answer.length && j < strs[i].length) {
          // 字符串也可以用[]的方式来获取第几个
          if (answer[j] !== strs[i][j]) {
              break
          }
          j++
      }
      // 跳出循环后，就是说明两个人公共子串的长度，直接截取
      // 不用担心一个相同的也没有，substring(0, 0) === ''
      answer = answer.substring(0, j)
  }
  return answer
};