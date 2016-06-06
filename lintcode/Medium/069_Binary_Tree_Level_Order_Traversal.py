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
    @return: Level order in a list of lists of integers
    """
    def levelOrder(self, root):
        # write your code here

        # BFS
        if (root is None):
            return []
        res = []
        queue = [root]
        while (len(queue) > 0):
            temp = []
            queueTemp = []
            for node in queue:
                if (node):
                    temp.append(node.val)
                    if (node.left):
                        queueTemp.append(node.left)
                    if (node.right):
                        queueTemp.append(node.right)
            res.append(temp)
            queue = queueTemp
        return res

        # DFS
        # if (root is None):
        #     return []
        # res = [[root.val]]
        # left = []
        # right = []
        # if (root.left):
        #     left = self.levelOrder(root.left)
        # if (root.right):
        #     right = self.levelOrder(root.right)
        # l = len(left) if len(left) > len(right) else len(right)
        # for i in range(l):
        #     if (i < len(left) and i < len(right)):
        #         res.append(left[i] + right[i])
        #     if (i >= len(left)):
        #         res.append(right[i])
        #     if (i >= len(right)):
        #         res.append(left[i])
        # return res
