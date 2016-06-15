class Solution:
    """
    @params s1, s2, s3: Three strings as description.
    @return: return True if s3 is formed by the interleaving of
             s1 and s2 or False if not.
    @hint: you can use [[True] * m for i in range (n)] to allocate a n*m matrix.
    """
    def isInterleave(self, s1, s2, s3):
        # write your code here

        # Solution 1 (TLE)
        # if (not s1):
        #     return s2 == s3
        # if (not s2):
        #     return s1 == s3
        # dp = [[c] for c in s1]
        # for i in range(len(s2)):
        #     for j in range(len(s1)):
        #         if (j == 0):
        #             left = [s2[:i+1]]
        #         else:
        #             left = dp[j - 1]
        #         tmp = []
        #         for s in left:
        #             if ((s + s1[j]) not in tmp):
        #                 tmp.append(s + s1[j])
        #         if (i == 0 and (s1[:j + 1] + s2[i]) not in tmp):
        #             tmp.append(s1[:j + 1] + s2[i])
        #         else:
        #             for s in dp[j]:
        #                 if ((s + s2[i]) not in tmp):
        #                     tmp.append(s + s2[i])
        #         dp[j] = tmp
        # return s3 in dp[-1]

        # Solution 2
        if (not s1):
            return s2 == s3
        if (not s2):
            return s1 == s3
        if (len(s3) != (len(s1) + len(s2))):
            return False
        dp = [[False] * (len(s2) + 1) for i in range(len(s1) + 1)]
        for i in range(1, len(s2) + 1):
            if (s2[:i] == s3[:i]):
                dp[0][i] = True
        for i in range(1, len(s1) + 1):
            if (s1[:i] == s3[:i]):
                dp[i][0] = True
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                if (s1[i - 1] == s3[i + j - 1] and dp[i - 1][j]):
                    dp[i][j] = True
                elif (s2[j - 1] == s3[i + j - 1] and dp[i][j - 1]):
                    dp[i][j] = True
        return dp[-1][-1]
