/*

给定一个 32 位有符号整数，将整数中的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。

*/
var reverse = function(x) {
    if (x > 0) {
      let result = 0;      
      let value = 0;
      while(x > 0) {
        value = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + value;      
        console.log(result);
      }        
      if (result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31)) {
        return result;
      } else {
        return 0;
      }
    } else if (x < 0) {
      x = -x;
      let result = 0; 
      let value = 0;
      while(x > 0) {

        value = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + value;
        //console.log('2');
      }       
      if (result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31)) {
        return -result;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
};

let a = -900000;
console.log(reverse(a));