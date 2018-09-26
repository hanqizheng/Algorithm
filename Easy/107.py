# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        queue = []
        result = []

        queue.append(root)
        while queue:
            size = len(queue)
            current = []
            for i in range(size):
                node = queue.pop(0)

                if node:
                    current.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)
            if current:
                result.insert(0, current)

        return result
