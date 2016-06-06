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
    @param x: an integer
    @return: a ListNode
    """
    def partition(self, head, x):
        # write your code here

        # Solution 1
        # arr = []
        # tmp = head
        # while (tmp):
        #     arr.append(tmp.val)
        #     tmp = tmp.next

        # less = filter(lambda n: n < x, arr)
        # rest = filter(lambda n: n >= x, arr)
        # arr = less + rest
        # arr = map(lambda n: ListNode(n), arr)
        # for i in range(len(arr) - 1):
        #     arr[i].next = arr[i + 1]
        # return arr[0] if len(arr) > 0 else None

        # Solution 2
        less = ListNode(0)
        rest = ListNode(0)
        i = head
        lessIndex = less
        restIndex = rest
        while (i is not None):
            if (i.val < x):
                lessIndex.next = i
                lessIndex = lessIndex.next
            else:
                restIndex.next = i
                restIndex = restIndex.next
            i = i.next
        restIndex.next = None
        lessIndex.next = rest.next
        return less.next
