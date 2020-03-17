// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


var mergeTwoLists = function (l1, l2) {
  let result = new ListNode()
  let head = result

  // 这里是l1,l2不是l1.next 和 l2.next是因为最后l1 = l1.next会让l1 变成null
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      result.next = l1
      l1 = l1.next
    } else {
      result.next = l2
      l2 = l2.next
    }
    result = result.next
  }

  // 这是对于不等长的两个链表的操作
  // 在合并完链表之后一个较长的链表后续的node也应该被链接进来
  // 如果是等长链表，正好给result的结尾附上null
  result.next = l1 ? l1 : l2

  return head.next
};
