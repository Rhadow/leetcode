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
    @return: Preorder in ArrayList which contains node values.
    """
    def preorderTraversal(self, root):
        # write your code here

        # Recursion
        # if (root is None):
        #     return []
        # return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right)

        # Iteration
        if (root is None):
            return []
        stack = []
        res = []
        tmp = root
        while(tmp):
            stack.append(tmp)
            res.append(tmp.val)
            tmp = tmp.left
        while (stack):
            target = stack.pop()
            if (target.right):
                tmp = target.right
                while (tmp):
                    res.append(tmp.val)
                    stack.append(tmp)
                    tmp = tmp.left
        return res
        
