# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        res = []
        path = ""
        self.TreePath(root, path, res)
        return res

    def TreePath(self, root, path, res):
        if not root:
            return root
        path += str(root.val)
        if root.left:
            self.TreePath(root.left, path + "->", res)
        if root.right:
            self.TreePath(root.right, path + "->", res)
        if not root.left and not root.right:
            res.append(path)
