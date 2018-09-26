# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# 二叉树的后序遍历递归实现


class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        res = []

        if not root:
            return []

        res += self.postorderTraversal(root.left)

        res += self.postorderTraversal(root.right)
        res += [root.val]
        return res
