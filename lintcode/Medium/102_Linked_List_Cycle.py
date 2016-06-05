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
    @return: True if it has a cycle, or false
    """
    def hasCycle(self, head):
        # write your code here

        # Solution 1
        # hash_map = {}
        # while (head):
        #     if (head in hash_map):
        #         return True
        #     else:
        #         hash_map[head] = 1
        #         head = head.next
        # return False

        # Solution 2
        if (not head or not head.next or not head.next.next):
            return False
        slow = head
        fast = head
        while (fast):
            slow = slow.next
            if (not slow):
                return False
            else:
                if (not fast.next):
                    return False
                fast = fast.next.next
                if (slow == fast):
                    return True
        return False
