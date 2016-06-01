"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param head: The first node of linked list.
    @param n: An integer.
    @return: The head of linked list.
    """
    def removeNthFromEnd(self, head, n):
        # write your code here

        # Solution 1
        # temp = head
        # arr = []
        # nodes = []
        # while (temp):
        #     arr.append(temp.val)
        #     temp = temp.next
        # arr = arr[:len(arr) - n] + arr[len(arr) - n + 1:]
        # for i in arr:
        #     nodes.append(ListNode(i))
        # for i in range(len(nodes) - 1):
        #     nodes[i].next = nodes[i + 1]
        # return nodes[0] if len(nodes) != 0 else None

        # Solution 2
        dummy = ListNode(0)
        dummy.next = head
        tmp = dummy
        for i in range(n):
            head = head.next
        while (head is not None):
            head = head.next
            tmp = tmp.next
        tmp.next = tmp.next.next
        return dummy.next
