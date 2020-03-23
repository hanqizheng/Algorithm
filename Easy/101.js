// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
// 说明:

// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

// 递归的方法
// 是否是对称树，只要自己的左右子树根节点值相等，且子节点镜像对称即可确认这棵树是对称的
var isSymmetric = function (root) {
  return isMirror(root, root)
};

function isMirror(left, right) {
  if (!left && !right) return true
  if (left === null || right === null) return false

  return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
}

// 迭代的方法
var isSymmetric = function (root) {
  const queue = []
  queue.push(root, root)

  while (queue.length) {
    let leftTree = queue.shift()
    let rightTree = queue.shift()

    if (leftTree === null && rightTree === null) continue
    if (leftTree === null || rightTree === null) return false
    if (leftTree.val !== rightTree.val) return false

    queue.push(leftTree.left, rightTree.right, leftTree.right, rightTree.left)
  }

  return true
};