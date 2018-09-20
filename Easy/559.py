"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""


class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """

        if not root:
            return 0
        temp = 0
        for i in root.children:
            temp = max(temp, self.maxDepth(i))
        return 1 + temp
