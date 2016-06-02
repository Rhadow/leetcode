# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param head: the list
    # @param k: rotate to the right k places
    # @return: the list after rotation
    def rotateRight(self, head, k):
        # write your code here

        # Solution 1
        # tmp = head
        # arr= []
        # while(tmp):
        #     arr.append(tmp.val)
        #     tmp = tmp.next
        # arr = arr[len(arr) - k:] + arr[:len(arr) - k]
        # arr = map(lambda i: ListNode(i), arr)
        # for i in range(len(arr) - 1):
        #     arr[i].next = arr[i + 1]
        # return arr[0] if len(arr) > 0 else None

        # Solution 2
        if (head is None):
            return None
        l = 1
        tmp = head
        while (tmp and tmp.next):
            tmp = tmp.next
            l += 1
        tmp.next = head
        for i in range(l - (k % l)):
            tmp = tmp.next
        res = tmp.next
        tmp.next = None
        return res
