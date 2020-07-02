
// 可以用es6的Set

function uniqueArray1(arr) {
  return [...new Set(arr)]
}

console.log(uniqueArray1([1, 1, 2, 3, 3, 3, 4, 4, 5, 2]))

// 我自己想的一种hash map的方法 这个还自带排序？？？

function uniqueArray2(arr) {
  if (!arr.length) return []

  const map = {}

  arr.forEach(item => {
    if (!map[item]) {
      Object.assign(map, { [item]: 1 })
    }
  })

  console.log(map)

  const result = Object.keys(map).map(item => parseInt(item))

  return result
}

console.log(uniqueArray2([1, 1, 7, 5, 2, 3, 3, 3, 4, 4, 5, 2]))