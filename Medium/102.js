// 102 二叉树层级遍历

// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// bfs方法
var levelOrder = function (root) {
  if (!root) return []

  let result = []
  let queue = [root]

  while (queue.length) {
    let len = queue.length
    let arr = []
    while (len) {
      let node = queue.shift(1)
      arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    result.push(arr)
  }

  return result
};

// dfs方法
var levelOrder = function(root) {
  if (!root) return []

  let res = []

  dfs(root, 0, res)
  return res
};

function dfs(root, step, res) {
  if (!res[step]) res[step] = []

  res[step].push(root.val)
  if (root.left) dfs(root.left, step + 1, res)
  if (root.right) dfs(root.right, step + 1, res)
}