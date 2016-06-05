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
    @return: You should return the head of the reversed linked list.
                  Reverse it in-place.
    """
    def reverse(self, head):
        # write your code here

        # Solution 1
        # if (head is None):
        #     return None
        # if (head.next is None):
        #     return head
        # ref = self.reverse(head.next)
        # tmp = ref
        # while(tmp.next):
        #     tmp = tmp.next
        # tmp.next = head
        # head.next = None
        # return ref
        
        # Solution 2
        prev = None
        while (head):
            tmp = head.next
            head.next = prev
            prev = head
            if (tmp):
                head = tmp
            else:
                return head
