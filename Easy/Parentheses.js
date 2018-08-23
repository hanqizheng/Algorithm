/*

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/

// 思路: 先用三个数组存放三种括号在字符串的下标
//      然后分别将下标相加，如果是正确的顺序
//      那么 奇数对相同类型括号和一定是一个奇数
//           偶数对相同类型括号和一定是偶数
var isValid = function(s) {
  let flag1 = [];
  let flag2 = [];
  let flag3 = [];

  let test1 = [];
  let test2 = [];
  let test3 = [];
  let f1 = 0;
  let f2 = 0;
  let f3 = 0;
  if (s.length === 0) {
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    switch(s.charAt(i)) {
      case '(':
        // if ((flag1.length % 2 !== 0) && (test1[test1.length - 1] === ')')) {
        //   return false;
        // }
        flag1.push(i);
        test1.push('(');
        break;
      case ')':
        if (flag1.length === 0) {
          return false;
        }
        flag1.push(i);
        test1.push(')');
        break;
      case '[':
        // if ((flag2.length % 2 !== 0) && (test2[test2.length - 1] === ']')) {
        //   return false;
        // }
        flag2.push(i);
        test2.push('[');
        break;
      case ']':
        if (flag2.length === 0) {
          return false;
        }
        flag2.push(i);
        test2.push(']');
        break;
      case '{':
        // if ((flag3.length % 2 !== 0) && (test3[test3.length - 1] === '}')) {
        //   return false;
        // }
        flag3.push(i);
        test3.push('{');
        break;
      case '}':
        if (flag3.length === 0) {
          return false;
        }
        flag3.push(i);
        test3.push('}');
        break;
      default:
        break;
    }
  }

  if ((flag1.length !== 0) && (flag1.length % 2 === 0)) {
    for (let i = 0; i < flag1.length; i++) {
      f1 += flag1[i];
    }
    let t = 0;
    let f = 0;
    for (let i = 0; i < test1.length; i++) {
      if (test1[i] === '(') {
        t++;
      } else {
        f++;
      }
    }

    if (t !== f) {
      return false;
    }
  } else if (flag1.length % 2 !== 0) {
    return false;
  }

  if ((flag2.length !== 0) && (flag2.length % 2 === 0)) {
    for (let i = 0; i < flag2.length; i++) {
      f2 += flag2[i];
    }

    let t = 0;
    let f = 0;
    for (let i = 0; i < test2.length; i++) {
      if (test2[i] === '[') {
        t++;
      } else {
        f++;
      }
    }

    if (t !== f) {
      return false;
    }
  } else if (flag2.length % 2 !== 0) {
    return false;
  }

  if ((flag3.length !== 0) && (flag3.length % 2 === 0)) {
    for (let i = 0; i < flag3.length; i++) {
      f3 += flag3[i];
    }

    let t = 0;
    let f = 0;
    for (let i = 0; i < test3.length; i++) {
      if (test3[i] === '{') {
        t++;
      } else {
        f++;
      }
    }

    if (t !== f) {
      return false;
    }
  } else if (flag3.length % 2 !== 0) {
    return false;
  }

  //如果是  偶数对  相同类型 的括号，那么他的和一定是偶数，所以给他加 1 然后必然就变成了  奇数
  if ((flag1.length !== 0) && ((flag1.length / 2) % 2 === 0)) {
    f1 += 1;
  }

  if ((flag2.length !== 0) && ((flag2.length / 2) % 2 === 0)) {
    f2 += 1;
  }

  if ((flag3.length !== 0) && ((flag3.length / 2) % 2 === 0)) {
    f3 += 1;
  }
  if((f1 !== 0 && f1 % 2 === 0) || (f2 !== 0 && f2 % 2 === 0) || (f2 !== 0 && f2 % 2 === 0)){
    return false;
  }
  return true;
};

let a = "{}{}()[]";
console.log(isValid(a));