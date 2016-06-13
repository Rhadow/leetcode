class Solution:
    # @param word1 & word2: Two string.
    # @return: The minimum number of steps.
    def minDistance(self, word1, word2):
        # write your code here
        dp = []
        for i in range(len(word1) + 1):
            dp.append([])
            for j in range(len(word2) + 1):
                if (i == 0):
                    dp[i].append(j)
                elif (j == 0):
                    dp[i].append(i)
                else:
                    a = dp[i - 1][j] + 1
                    b = dp[i][j - 1] + 1
                    c = dp[i - 1][j - 1] if word1[i - 1] == word2[j - 1] else dp[i - 1][j - 1] + 1
                    dp[i].append(min(a, b, c))
        return dp[-1][-1]
