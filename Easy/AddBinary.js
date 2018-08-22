/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 */

var addBinary = function(a, b) {
  let carry = 0;
  let result = '';
  let lenA = a.length;
  let lenB = b.length;
  let m = 0;
  let n = 0;
  while (lenA >= 0 || lenB >= 0 || carry > 0) {
      m = lenA < 0 ? 0 : a[lenA] - 0;
      n = lenB < 0 ? 0 : b[lenB] - 0;
      let temp = m + n + carry;
      console.log('temp' + temp);
      carry = Math.floor(+temp / 2);
      result = (+temp % 2) + result;
      
      lenA--;
      lenB--;
  }
  
  // if (carry !== 0) {
  //     result = '1' + result;
  // }
  return result;
};

let a = '1010';
let b = '1101';
console.log(addBinary(a,b));