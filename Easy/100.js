// 给定两个二叉树，编写一个函数来检验它们是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1:

// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true
// 示例 2:

// 输入:      1          1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// 输出: false
// 示例 3:

// 输入:       1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// 输出: false

// 暴力的递归调用
var isSameTree = function (p, q) {
  // 如果两个节点都是空，直接返回true
  if (p === null && q === null) return true

  // 如果两个节点有一个是空， false，为什么不和值的判断合并一起
  // 因为p， q还是指针，而我们直接判断.val可能遇到null.val报错
  if (p === null || q === null) return false

  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};


// 迭代的方法
var isSameTree = function (p, q) {
  const queue = []
  queue.push(p, q)
  while (queue.length) {
    let firstP = queue.shift()
    let firstQ = queue.shift()

    if (firstP === null && firstQ === null) continue
    if (firstP && firstQ && firstP.val === firstQ.val) {
      queue.push(firstP.left, firstQ.left)
      queue.push(firstP.right, firstQ.right)
    } else {
      return false
    }
  }

  return true
};
