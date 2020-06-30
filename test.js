

function compare(a, b, c) {
  // 将目标转换成数组处理
  let strA = [...a]
  let strB = [...b]
  // 结果数组，最后变为字符串
  let result = []
  for (let i = 0; i < strA.length; i++) {
    let j = 0
    // 让i记录其实位置，pivot则用来移动比较目标字符串
    let pivot = i
    for (; j < strB.length; j++) {
      if (strA[pivot] !== strB[j]) break
      pivot++
    }
    if (j === strB.length) {
      for (let k = i; k < strB.length + i; k++) {
        // 都标记为0是便于以后替换，0是要舍弃的数组元素
        strA[k] = 0
      }
      // 标记为1的地方，是要替换成目标字符串的元素
      strA[i] = 1
    }
  }
  // 舍弃0
  result = [...strA].filter(item => item !== 0)
  // 替换
  result = result.map(item => {
    if (item === 1) {
      return [c]
    } else {
      return item
    }
  })

  return result.join('')
}

console.log(compare(
  'aaa',
  'a',
  'gaa'
))
