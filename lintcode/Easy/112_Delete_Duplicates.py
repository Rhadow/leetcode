"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param head: A ListNode
    @return: A ListNode
    """
    def deleteDuplicates(self, head):
        # write your code here
        tmp = head
        while (tmp and tmp.next):
            if (tmp.val != tmp.next.val):
                tmp = tmp.next
            else:
                tmp.next = tmp.next.next
        return head
