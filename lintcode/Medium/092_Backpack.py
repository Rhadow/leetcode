class Solution:
    # @param m: An integer m denotes the size of a backpack
    # @param A: Given n items with size A[i]
    # @return: The maximum size
    def backPack(self, m, A):
        # write your code here

        # Solution 1 (TLE)
        # dp = [[]]
        # for i in range(1, m + 1):
        #     localRes = []
        #     for s in A:
        #         if (i - s >= 0):
        #             tmp = dp[i - s]
        #             B = [] + A
        #             for j in tmp:
        #                 B.pop(B.index(j))
        #             rest = i - sum(tmp)
        #             if (rest in B):
        #                 localRes = [rest] + tmp
        #                 break
        #             else:
        #                 localRes = dp[i - 1]
        #     dp.append(localRes)
        # return sum(dp[-1])

        # Solution 2
        dp = [0] * (m + 1)
        for thing in A:
            for i in range(m, -1, -1):
                if (i >= thing):
                    a = dp[i]
                    b = dp[i - thing] + thing
                    dp[i] = max(a, b)
        return dp[-1]
