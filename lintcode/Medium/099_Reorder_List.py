"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param head: The first node of the linked list.
    @return: nothing
    """
    def reorderList(self, head):
        # write your code here
        if (head is None):
            return head

        # Find mid
        slow = head
        fast = head
        while (fast and fast.next and fast.next.next and fast.next.next.next):
            fast = fast.next.next
            slow = slow.next
        mid = slow.next
        slow.next = None

        # Reverse
        def reverse(h):
            prev = None
            while (h):
                tmp = h.next
                h.next = prev
                prev = h
                h = tmp
            return prev
        mid = reverse(mid)

        # Merge
        i = head
        j = mid
        while (i and j):
            tmp = i.next
            tmp2 = j.next
            i.next = j
            if (tmp is None):
                break
            if (tmp2 is None):
                j.next = tmp
                break
            j.next = tmp
            i = tmp
            j = tmp2
