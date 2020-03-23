// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 自己写的广度遍历的迭代方式,和104差不多
var levelOrderBottom = function (root) {
  if (!root) return []


  let stack = []
  stack.push(root)

  let result = [[root.val]]
  while (stack.length) {
    let temp = []
    let tempStack = []

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].left) {
        temp.push(stack[i].left.val)
        tempStack.push(stack[i].left)
      }
      if (stack[i].right) {
        temp.push(stack[i].right.val)
        tempStack.push(stack[i].right)
      }
    }
    stack = tempStack
    if (temp.length) {
      result.push(temp)
    }
  }

  return result.reverse()
};