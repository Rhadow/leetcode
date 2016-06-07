"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class Solution:
    """
    @param root: The root of the binary search tree.
    @param node: insert this node into the binary search tree.
    @return: The root of the new binary search tree.
    """
    def insertNode(self, root, node):
        # write your code here

        # Iteration
        if (root is None):
            return node
        parent = None
        target = root
        dir = None
        while (target):
            parent = target
            if (target.val < node.val):
                target = target.right
                dir = 'right'
            else:
                target = target.left
                dir = 'left'
            if (target is None):
                if (dir == 'left'):
                    parent.left = node
                else:
                    parent.right = node
                break
        return root;

        # Recursion
        # if (root is None):
        #     return node
        # if (root.val > node.val):
        #     root.left = self.insertNode(root.left, node)
        # else:
        #     root.right = self.insertNode(root.right, node)
        # return root
