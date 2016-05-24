class Solution:
    """
    @param A : a list of integers
    @param target : an integer to be inserted
    @return : an integer
    """
    def searchInsert(self, A, target):
        # write your code here
        l, r = 0, len(A) - 1
        while (l <= r):
            i = (l + r) / 2
            if (A[i] == target):
                return i
            elif (A[i] < target):
                l = i + 1
            else:
                r = i - 1
        return l
