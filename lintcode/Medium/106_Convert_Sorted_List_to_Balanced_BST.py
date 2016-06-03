"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next

Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class Solution:
    """
    @param head: The first node of linked list.
    @return: a tree node
    """
    def sortedListToBST(self, head):
        # write your code here
        # Solution 1
        # arr = []
        # while (head):
        #     arr.append(head.val)
        #     head = head.next
        # def toBST(l):
        #     if (len(l) < 1):
        #         return None
        #     if (len(l) == 1):
        #         return TreeNode(l[0])
        #     mid = len(l) / 2
        #     res = TreeNode(l[mid])
        #     res.left = toBST(l[:mid])
        #     res.right = toBST(l[mid + 1:])
        #     return res
        # return toBST(arr)

        # Solution 2
        if (head is None):
            return None
        dummy = ListNode(0)
        dummy.next = head
        slow = dummy
        fast = dummy
        while (fast and fast.next and fast.next.next and fast.next.next.next):
            fast = fast.next.next
            slow = slow.next
        res = TreeNode(slow.next.val)
        right = slow.next.next
        slow.next = None
        left = dummy.next
        res.left = self.sortedListToBST(left)
        res.right = self.sortedListToBST(right)
        return res
