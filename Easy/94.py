# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# 中序遍历的递归实现


class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        res = []

        if not root:
            return []

        res += self.inorderTraversal(root.left)
        res += [root.val]
        res += self.inorderTraversal(root.right)

        return res
