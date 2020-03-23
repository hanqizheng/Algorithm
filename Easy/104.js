// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 递归方法
var maxDepth = function (root) {
  if (root === null) return 0
  if (!root.left && !root.right) return 1
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


// 迭代方法
var maxDepth = function (root) {
  if (root === null) return 0
  let stack = []
  let depth = 0
  stack.push(root)
  while (stack.length) {
    depth++
    let temp = []
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left) {
        temp.push(stack[i].left)
      }
      if (stack[i].right) {
        temp.push(stack[i].right)
      }
    }
    stack = temp
  }

  return depth
};
