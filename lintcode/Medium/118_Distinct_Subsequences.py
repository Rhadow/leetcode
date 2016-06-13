class Solution:
    # @param S, T: Two string.
    # @return: Count the number of distinct subsequences
    def numDistinct(self, S, T):
        # write your code here

        # DP
        # dp = []
        # for i in range(len(T) + 1):
        #     dp.append([])
        #     for j in range(len(S) + 1):
        #         if (i == 0):
        #             dp[i].append(1)
        #         elif (j == 0):
        #             dp[i].append(0)
        #         else:
        #             tmp = dp[i][j - 1] + dp[i - 1][j - 1]
        #             dp[i].append(tmp if T[i - 1] == S[j - 1] else dp[i][j - 1])
        # return dp[-1][-1]

        # O(2n) Memory
        if (S == ""):
            return 0
        dp = [1] * len(S)
        for i in range(len(T)):
            prev = 0
            tmpDp = [] + dp
            for j in range(len(S)):
                tmp = dp[j - 1] + prev if j > 0 else 1 + prev if i == 0 else prev
                tmpDp[j] = tmp if T[i] == S[j] else prev
                prev = tmpDp[j]
            dp = [] + tmpDp
        return dp[-1]
