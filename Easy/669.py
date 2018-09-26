# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution(object):
    def trimBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: TreeNode
        """
        if not root:
            return root

        if root.val < L:
            return self.trimBST(root.right, L, R)
        if root.val > R:
            return self.trimBST(root.left, L, R)

        root.left = self.trimBST(root.left, L, R)
        root.right = self.trimBST(root.right, L, R)

        return root

# 相对难一点的地方是 想要才剪掉的节点用哪个节点来补位
# 如果root.val < L 那么一定是用他的右子树来补位
# 如果root.val > R 那么一定是用他的左子树来补位
# 也许看完会很费解，但是你举个例子，话个图，一下子就明白了
