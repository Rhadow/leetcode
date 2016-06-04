# Definition for singly-linked list with a random pointer.
# class RandomListNode:
#     def __init__(self, x):
#         self.label = x
#         self.next = None
#         self.random = None
class Solution:
    # @param head: A RandomListNode
    # @return: A RandomListNode
    def copyRandomList(self, head):
        # write your code here

        # Solution 1
        # dummy = RandomListNode(0)
        # tmp = dummy
        # tmp2 = head
        # hashmap = {}
        # while (tmp2):
        #     tmp.next = RandomListNode(tmp2.label)
        #     hashmap[tmp2.label] = tmp.next
        #     tmp = tmp.next
        #     tmp2 = tmp2.next
        # tmp2 = head
        # tmp = dummy
        # while (tmp2):
        #     tmp.next.random = hashmap[tmp2.random.label] if tmp2.random else None
        #     tmp = tmp.next
        #     tmp2 = tmp2.next
        # return dummy.next

        # Solution 2
        if (not head):
            return None
        tmp = head
        while (tmp):
            rest = tmp.next
            tmp.next = RandomListNode(tmp.label)
            tmp.next.next = rest
            tmp = tmp.next.next
        tmp = head
        while (tmp):
            if (tmp.random):
                tmp.next.random = tmp.random.next
            tmp = tmp.next.next
        dummy = RandomListNode(0)
        tmp = dummy
        while (head):
            tmp.next = head.next
            head = head.next.next
            tmp = tmp.next
        return dummy.next
