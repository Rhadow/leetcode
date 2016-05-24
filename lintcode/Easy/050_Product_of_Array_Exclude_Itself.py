class Solution:
    """
    @param A: Given an integers array A
    @return: An integer array B and B[i]= A[0] * ... * A[i-1] * A[i+1] * ... * A[n-1]
    """
    def productExcludeItself(self, A):
        # write your code here
        left = [1] * len(A)
        right = [1] * len(A)
        for i in range(1, len(A)):
            if (i == 0):
                left[i] = 1
            else:
                left[i] = A[i - 1] * left[i - 1]
        for i in range(len(A) - 2, -1, -1):
            right[i] = A[i + 1] * right[i + 1]
            left[i] = left[i] * A[i + 1] * right[i + 1]
        return left
