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
    @param value: Remove the node with given value.
    @return: The root of the binary search tree after removal.
    """
    def removeNode(self, root, value):
        # write your code here

        # Solution 1
        # def inorder(bst):
        #     if (bst is None):
        #         return []
        #     return inorder(bst.left) + [bst.val] + inorder(bst.right)
        # def buildTree(li):
        #     if (not li):
        #         return None
        #     mid = len(li) / 2
        #     r = TreeNode(li[mid])
        #     r.left = buildTree(li[:mid])
        #     r.right = buildTree(li[mid+1:])
        #     return r
        # arr = inorder(root)
        # if value in arr:
        #     i = arr.index(value)
        #     arr = arr[:i] + arr[i+1:]
        # return buildTree(arr)

        # Solution 2
        def treeMini(bst):
            mini = bst.val
            if (bst.left):
                mini = treeMini(bst.left)
            return mini
        parent = None
        target = root
        dir = None
        while (target):
            if (target.val > value):
                parent = target
                dir = 'left'
                target = target.left
            elif (target.val < value):
                parent = target
                dir = 'right'
                target = target.right
            else:
                if (dir is None):
                    if (target.left is None and target.right is None):
                        return None
                    elif (target.left and target.right):
                        target.val = treeMini(target.right)
                        self.removeNode(target.right, target.val)
                    else:
                        if (target.left is None):
                            return target.right
                        else:
                            return target.left
                else:
                    if (target.left is None and target.right is None):
                        if (dir == 'left'):
                            parent.left = None
                        else:
                            parent.right = None
                    elif (target.left and target.right):
                        target.val = treeMini(target.right)
                        self.removeNode(target.right, target.val)
                    else:
                        if (target.left is None):
                            if (dir == 'left'):
                                parent.left = target.right
                            else:
                                parent.right = target.right
                        else:
                            if (dir == 'left'):
                                parent.left = target.left
                            else:
                                parent.right = target.left
                break
        return root
