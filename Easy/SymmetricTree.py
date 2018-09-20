# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        def check(t1, t2):
            if not t1 and not t2:
                return True
            if t1 and t2:
                return (
                    t1.val == t2.val
                    and check(t1.left, t2.right)
                    and check(t1.right, t2.left)
                )

            return False

        if not root:
            return True
        return check(root.left, root.right)
