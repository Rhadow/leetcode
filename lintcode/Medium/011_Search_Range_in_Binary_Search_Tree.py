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
    @param k1 and k2: range k1 to k2.
    @return: Return all keys that k1<=key<=k2 in ascending order.
    """
    def searchRange(self, root, k1, k2):
        # write your code here

        # Solution 1
        # def inOrder(bst):
        #     res = []
        #     if (bst):
        #         stack = []
        #         cur = bst
        #         while (cur):
        #             stack.append(cur)
        #             cur = cur.left
        #         while (stack):
        #             target = stack.pop()
        #             res.append(target.val)
        #             if (target.right):
        #                 cur = target.right
        #                 while (cur):
        #                     stack.append(cur)
        #                     cur = cur.left
        #     return res
        # res = inOrder(root)
        # return filter(lambda x: x >= k1 and x <= k2, res)

        # Solution 2
        if (root is None):
            return []
        if (root.left is None and root.right is None):
            if (root.val >= k1 and root.val <= k2):
                return [root.val]
            else:
                return []
        leftResult = self.searchRange(root.left, k1, k2)
        rightResult = self.searchRange(root.right, k1, k2)
        if (root.val >= k1 and root.val <= k2):
            return leftResult + [root.val] + rightResult
        else:
            return leftResult + rightResult
