function flatten(arr) {
  if (!arr.length) return []

  let result = []

  // arr.forEach(item => {
  //   if (Array.isArray(item)) {
  //     result = result.concat(flatten(item))
  //   } else {
  //     result.push(item)
  //   }
  // })

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

console.log(flatten([1, [1, 2, [3]], [4], 5, 6, [7, [8, [9]]]]))