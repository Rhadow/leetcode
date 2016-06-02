"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param two ListNodes
    @return a ListNode
    """
    def mergeTwoLists(self, l1, l2):
        # write your code here

        # Solution 1
        # a = []
        # b = []
        # res = []
        # tmp1 = l1
        # tmp2 = l2
        # while (tmp1):
        #     a.append(tmp1.val)
        #     tmp1 = tmp1.next
        # while (tmp2):
        #     b.append(tmp2.val)
        #     tmp2 = tmp2.next
        # a = a + b
        # a = sorted(a)

        # for i in a:
        #     res.append(ListNode(i))
        # for i in range(len(a) - 1):
        #     res[i].next = res[i + 1]
        # return res[0]

        # Solution 2
        res = ListNode(0)
        tmp = res
        while (l1 and l2):
            if (l1.val >= l2.val):
                tmp.next = l2
                l2 = l2.next
            else:
                tmp.next = l1
                l1 = l1.next
            tmp = tmp.next
        if (l1 is None):
            tmp.next = l2
        if (l2 is None):
            tmp.next = l1
        return res.next
