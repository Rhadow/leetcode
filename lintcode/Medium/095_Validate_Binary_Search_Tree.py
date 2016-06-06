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
    @return: True if the binary tree is BST, or false
    """
    def isValidBST(self, root):
        # write your code here

        # Solution 1
        def validate(bst, mini, maxi):
            if (bst is None):
                return True
            if (bst.val <= mini or bst.val >= maxi):
                return False
            isLeftValid = validate(bst.left, mini, bst.val)
            isRightValid = validate(bst.right, bst.val, maxi)
            return isLeftValid and isRightValid
        return validate(root, -sys.maxsize - 1, sys.maxsize)

        # Solution 2
        # def inOrder(bst):
        #     res = []
        #     if (bst):
        #         stack = []
        #         cur = bst
        #         while (cur):
        #             stack.append(cur)
        #             cur = cur.left
        #         while (len(stack)):
        #             target = stack.pop()
        #             res.append(target.val)
        #             if (target.right):
        #                 cur = target.right
        #                 while (cur):
        #                     stack.append(cur)
        #                     cur = cur.left
        #     return res
        # arr = inOrder(root)
        # for i in (range(len(arr) - 1)):
        #     if (arr[i] >= arr[i + 1]):
        #         return False
        # return True
