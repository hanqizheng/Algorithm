var levelOrderBottom = function (root) {
  if (root === null) return root

  let stack = []
  stack.push(root)

  let result = []
  while (stack.length) {
    let temp = []

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left) {
        temp.push(stack[i].left.val)
      }
      if (stack[i].right) {
        temp.push(stack[i].right.val)
      }
    }
    console.log('temp: ', temp)
    stack = temp
    result.push(temp)
  }

  return result
};

console.log(levelOrderBottom([3, 9, 20, null, null, 15, 7]))