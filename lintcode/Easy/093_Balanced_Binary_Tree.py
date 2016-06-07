"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class Solution:
    """
    @param root: The root of binary tree.
    @return: True if this Binary tree is Balanced, or false.
    """
    def isBalanced(self, root):
        # write your code here
        def height(bst):
            if (bst is None):
                return 0
            return 1 + max(height(bst.left), height(bst.right))
        if (root is None):
            return True
        left = height(root.left)
        right = height(root.right)
        return math.fabs(left - right) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)
