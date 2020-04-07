// 141. 环形链表
// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。



// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。


// 示例 3：

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。



// hash表方法，用Map的key来存链表每个节点的引用，value随便是什么都行
// 如果Map中存在相同的key，则为环形链表
var hasCycle = function (head) {
  const map = new Map()

  while (head) {
    if (map.has(head)) return true
    map.set(head, head.val)
    head = head.next
  }

  return false
};


// 双指针
// 一个快一个慢，如果有环，快的和慢的一定会相遇
// 如果没环，快的则会先变成null

var hasCycle = function (head) {
  if (!head) return false

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false

    slow = slow.next
    fast = fast.next.next
  }

  return true
};
