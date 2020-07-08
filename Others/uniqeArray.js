
// 可以用es6的Set

function uniqueArray(arr) {
  return [...new Set(arr)]
}

console.log(uniqueArray([1, 1, 2, 3, 3, 3, 4, 4, 5, 2]))