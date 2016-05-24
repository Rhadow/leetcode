class Solution:
    """
    @param A: a list of integers
    @return an integer
    """
    def removeDuplicates(self, A):
        # write your code here
        if (len(A) == 0):
            return 0
        if (len(A) == 1):
            return 1
        i = 1
        j = 0
        while (i <= len(A) - 1):
            if (A[i] == A[j]):
                i += 1
            else:
                A[j + 1] = A[i]
                i += 1
                j += 1
        return j + 1
