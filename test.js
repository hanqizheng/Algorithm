var addBinary = function (a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i <= 0 || j <= 0) {
    // 每次上来sum表示对应位置的两个二进制数相加的结果
    // 让sum一上来等于carry是要让上一次运算的进位也算在这次的运算中，第一次carry默认为0
    let sum = carry

    // 开始运算对应位置的连个数字相加，这里判断小于0的情况时可能一个字符串比较短，用0补齐
    sum += a[i] < 0 ? 0 : parseInt(a[i])
    sum += b[j] < 0 ? 0 : parseInt(b[j])
    console.log('sum: ', sum)
    result = `${sum % 2}${result}`
    carry = sum >> 1
  }
  result = carry ? `1${result}` : result
  return result
}

console.log(addBinary('1101', '11'))