"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""
class Solution:
    """
    @param lists: a list of ListNode
    @return: The head of one sorted list.
    """
    def mergeKLists(self, lists):
        # write your code here

        # Solution 1 (TLE)
        # if (not lists):
        #     return None
        # heads = []
        # dummy = ListNode(0)
        # tmp = dummy
        # for l in lists:
        #     if (l):
        #         heads.append(l)
        # while(tmp):
        #     mini = None
        #     index = None
        #     for i, h in enumerate(heads):
        #         if (h and (mini is None or h.val < mini.val)):
        #             mini = h
        #             index = i
        #     if (index >= 0):
        #         if (heads[index].next is None):
        #             heads.pop(index)
        #         else:
        #             heads[index] = heads[index].next
        #     tmp.next = mini
        #     tmp = tmp.next
        # return dummy.next


        # Solution 2
        # def mergeTwoList(h1, h2):
        #     dummy = ListNode(0)
        #     tmp = dummy
        #     while (h1 and h2):
        #         if (h1.val < h2.val):
        #             tmp.next = h1
        #             h1 = h1.next
        #         else:
        #             tmp.next = h2
        #             h2 = h2.next
        #         tmp = tmp.next
        #     if (not h1):
        #         tmp.next = h2
        #     if (not h2):
        #         tmp.next = h1
        #     return dummy.next

        # if (not lists):
        #     return None
        # end = len(lists) - 1
        # while (end > 0):
        #     start = 0
        #     while (start < end):
        #         lists[start] = mergeTwoList(lists[start], lists[end])
        #         start += 1
        #         end -= 1
        # return lists[0]

        # Solution 3
        q = []
        dummy = ListNode(0)
        tmp = dummy
        def insertNode(n, arr):
            start = 0
            end = len(arr) - 1
            if (len(arr) == 0):
                arr.append(n)
                return True
            while (start < end):
                mid = (start + end) / 2
                if (arr[mid].val == n.val):
                    arr.insert(mid + 1, n)
                    return True
                elif (arr[mid].val > n.val):
                    end = mid - 1
                else:
                    start = mid + 1
            if (arr[start].val < n.val):
                arr.insert(start+1, n)
            else:
                arr.insert(start, n)
        for node in lists:
            if (node):
                insertNode(node, q)
        while (q):
            node = q.pop(0)
            if (node.next):
                insertNode(node.next, q)
            tmp.next = node
            tmp = tmp.next
        return dummy.next
