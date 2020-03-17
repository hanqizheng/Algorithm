// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。

//  

// 示例1：

// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-permutation-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 只要字符串中个数为奇数的字符超过1个，说明不能拼成回文字符串
// 庆祝一下自己想到了最优解，而且一次过
var canPermutePalindrome = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      Object.assign(map, { [s[i]]: 1 })
    } else {
      map[s[i]] += 1
    }
  }

  const len = Object.keys(map).filter(item => map[item] % 2 !== 0).length
  return len > 1 ? false : true
};