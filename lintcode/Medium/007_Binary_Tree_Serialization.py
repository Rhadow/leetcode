"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class Solution:

    '''
    @param root: An object of TreeNode, denote the root of the binary tree.
    This method will be invoked first, you should design your own algorithm
    to serialize a binary tree which denote by a root node to a string which
    can be easily deserialized by your own "deserialize" method later.
    '''
    def serialize(self, root):
        # write your code here
        if (root is None):
            return ""
        q = [root]
        res = ""
        while (q):
            target = q.pop(0)
            res += (str(target.val) + ',') if target else '#,'
            if (target):
                q.append(target.left)
                q.append(target.right)
        return res

    '''
    @param data: A string serialized by your serialize method.
    This method will be invoked second, the argument data is what exactly
    you serialized at method "serialize", that means the data is not given by
    system, it's given by your own serialize method. So the format of data is
    designed by yourself, and deserialize it here as you serialize it in
    "serialize" method.
    '''
    def deserialize(self, data):
        data = data.split(',')
        data.pop()
        if (not data):
            return None
        i = len(data) - 1
        while (i >= 0):
            if (data[i] != "#"):
                break
            i -= 1
        data = data[:i + 1]
        root = TreeNode(data[0])
        q = [root]
        toPop = False
        target = q.pop(0)
        for i in range(1, len(data)):
            if (toPop):
                target.right = TreeNode(data[i]) if data[i] != "#" else None
                if (target.right):
                    q.append(target.right)
                target = q.pop(0)
                toPop = False
            else:
                target.left = TreeNode(data[i]) if data[i] != "#" else None
                if (target.left):
                    q.append(target.left)
                toPop = True
        return root
