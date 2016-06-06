"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""


class Solution:
    """
    @param preorder : A list of integers that preorder traversal of a tree
    @param inorder : A list of integers that inorder traversal of a tree
    @return : Root of a tree
    """
    def buildTree(self, preorder, inorder):
        # write your code here
        sorted_pre = sorted(preorder)
        sorted_in = sorted(inorder)
        if (sorted_pre != sorted_in or len(preorder) == 0):
            return None
        if (len(preorder) == 1):
            return TreeNode(preorder[0])
        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])
        root.left = self.buildTree(preorder[1:1+mid], inorder[:mid])
        root.right = self.buildTree(preorder[1+mid:], inorder[mid+1:])
        return root
