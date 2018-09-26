# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# 二叉树前序遍历递归实现


class Solution(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        res = []

        if not root:
            return []

        res += [root.val]
        res += self.preorderTraversal(root.left)
        res += self.preorderTraversal(root.right)

        return res
