class Solution:
    # @param A, a list of integers
    # @return a boolean
    def canJump(self, A):
        # write your code here

        # Brute Force
        jumpable = [False] * len(A)
        jumpable[0] = True
        for i in range(len(A)):
            if (jumpable[i]):
                for j in range(1, A[i] + 1):
                    if (i + j < len(jumpable)):
                        jumpable[i + j] = True
        return jumpable[len(A) - 1]
