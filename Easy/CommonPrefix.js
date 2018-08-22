/*

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*/
var longestCommonPrefix = function(strs) {
    let result = '';
    let j;
    if (Array.isArray(strs) && strs.length === 0) {
      return result;
    }
    for (let i = 0; i < strs[0].length; i++) {
      for(j = 1; j < strs.length; j++) {
        if (strs[0].charAt(i) !== strs[j].charAt(i)) {
          return result;
        }
      }
      if (j === strs.length) {
        result = result + strs[0].charAt(i);
      }
    }

    return result;
};

let a = ["faower","flow","floght"];
console.log(longestCommonPrefix(a));