# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        queue = []

        res = []

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
                avg = 0
                for i in current:
                    avg += i
                avg = avg / float((len(current)))
                res.append(avg)
        return res
