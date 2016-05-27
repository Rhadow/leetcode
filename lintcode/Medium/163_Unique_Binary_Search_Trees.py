class Solution:
    # @paramn n: An integer
    # @return: An integer
    def numTrees(self, n):
        dp = [1,1]
        # write your code here
        for i in range(2, n + 1):
            sum = 0
            for j in range(1, i + 1):
                left = j - 1
                right = i - j
                sum += dp[left] * dp[right]
            dp.append(sum)
        return dp[n]
