class Solution:
    # @param m: An integer m denotes the size of a backpack
    # @param A & V: Given n items with size A[i] and value V[i]
    # @return: The maximum value
    def backPackII(self, m, A, V):
        # write your code here
        dp = [0] * (m + 1)
        valueDp = [0] * (m + 1)
        result = 0
        for thingIndex, thing in enumerate(A):
            for i in range(m, -1, -1):
                if (i >= thing):
                    a = dp[i]
                    b = dp[i - thing] + thing
                    if (a <= b):
                        dp[i] = b
                        result = max(valueDp[i], valueDp[i - thing] + V[thingIndex], result)
                        valueDp[i] = max(valueDp[i], valueDp[i - thing] + V[thingIndex])
        return result
