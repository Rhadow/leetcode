class Solution:
    # @param A, B: Two string.
    # @return: the length of the longest common substring.
    def longestCommonSubstring(self, A, B):
        # write your code here
        dp = []
        result = 0
        for indexA in range(len(A)):
            dp.append([])
            for indexB in range(len(B)):
                if (A[indexA] == B[indexB]):
                    if (indexA >= 1 and indexB >= 1):
                        temp = 1 + dp[indexA - 1][indexB - 1]
                        dp[indexA].append(temp)
                        if (temp > result):
                            result = temp
                    else:
                        dp[indexA].append(1)
                        if (1 > result):
                            result = 1
                else:
                    dp[indexA].append(0)
        return result
