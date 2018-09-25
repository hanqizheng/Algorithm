"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""


class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        res = []
        if not root:
            return []
        if not root.children:
            return [root.val]
        for i in root.children:
            res += self.postorder(i)
        res += [root.val]
        return res
