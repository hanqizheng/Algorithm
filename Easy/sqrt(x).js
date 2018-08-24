/**
 * 
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */

var mySqrt = function(x) {
    if (x <= 0) {
      return 0;
    }

    let begin = 1;
    let end = Math.floor(x/2 + 1);  
    let mid = Math.floor(begin + (end - begin) / 2);
    while(begin <= end) {

      mid = Math.floor(mid);
      let pow = mid * mid;
      if (pow === x) {
        return mid;
      } else if (pow < x) {
        begin = mid + 1;
      } else {
        end = mid - 1;
      }     
      mid = begin + (end - begin) / 2;
    }

    return end;
};

let a = 10000;
console.log(mySqrt(a));

/**
 var mySqrt = function (x) {
    let l = 0, r = x
    while (true) {
        let mid = parseInt(l + (r - l) / 2)
        if (mid * mid > x) {
            r = mid - 1
        } else if (mid * mid < x) {
            if ((mid + 1) * (mid + 1) > x) {
                return mid
            }
            l = mid + 1
        } else {
            return mid
        }
    }
};
 */