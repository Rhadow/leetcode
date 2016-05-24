class Solution:
    # @param A, a list of integers
    # @return an integer
    def firstMissingPositive(self, A):
        # write your code here
        i = 0
        if (len(A) == 0):
            return 1
        while (i < len(A)):
            if (A[i] > 0 and A[i] < len(A) and A[i] != i + 1 and A[A[i] - 1] != A[i]):
                temp = A[A[i] - 1]
                A[A[i] - 1] = A[i]
                A[i] = temp
            else:
                i += 1
        for i in range(len(A)):
            if (i + 1 != A[i]):
                return i + 1
        return len(A) + 1
