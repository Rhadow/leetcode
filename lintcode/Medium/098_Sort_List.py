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
    @return: You should return the head of the sorted linked list,
                  using constant space complexity.
    """
    def sortList(self, head):
        # write your code here

        # Quick Sort
        # if (head is None or head.next is None):
        #     return head
        # if (head.next.next is None):
        #     dummy = ListNode(0)
        #     if (head.val > head.next.val):
        #         dummy.next = head.next
        #         dummy.next.next = head
        #         dummy.next.next.next = None
        #     else:
        #         dummy.next = head
        #     return dummy.next
        # dummy = ListNode(0)
        # dummy.next = head

        # mid = head
        # tmp = head.next

        # left = ListNode(0)
        # right = ListNode(0)
        # tmpLeft = left
        # tmpRight = right

        # while (tmp):
        #     if (tmp.val < mid.val):
        #         tmpLeft.next = tmp
        #         tmpLeft = tmpLeft.next
        #     else:
        #         tmpRight.next = tmp
        #         tmpRight = tmpRight.next
        #     tmp = tmp.next
        # tmpLeft.next = None
        # tmpRight.next = None

        # dummy.next = self.sortList(left.next)
        # tmp = dummy
        # while (tmp.next):
        #     tmp = tmp.next
        # tmp.next = mid
        # tmp.next.next = self.sortList(right.next)
        # return dummy.next

        # Merge Sort
        if (head is None or head.next is None):
            return head
        slow = head
        fast = head
        while (fast and fast.next and fast.next.next):
            slow = slow.next
            fast = fast.next.next
        right = slow.next
        slow.next = None
        left = head
        left = self.sortList(left)
        right = self.sortList(right)
        dummy = ListNode(0)
        tmp = dummy
        while (left and right):
            if (left.val < right.val):
                tmp.next = left
                left = left.next
            else:
                tmp.next = right
                right = right.next
            tmp = tmp.next
        if (left is None):
            tmp.next = right
        else:
            tmp.next = left
        return dummy.next
