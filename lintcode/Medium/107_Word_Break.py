class Solution:
    # @param s: A string s
    # @param dict: A dictionary of words dict
    def wordBreak(self, s, dict):
        # write your code here
        if (not s):
            return True
        dp = []
        for i in range(1, len(s) + 1):
            tmp = s[:i]
            if (tmp in dict):
                dp.append(True)
            else:
                tmpRes = False
                for j in range(len(dp)):
                    if (dp[j] and tmp[j + 1:] in dict):
                        tmpRes = True
                        break
                dp.append(tmpRes)
        return dp[-1]

        # JiuZhang
        # if len(dict) == 0:
        #     return len(s) == 0
        # n = len(s)
        # f = [False] * (n + 1)
        # f[0] = True
        # maxLength = max([len(w) for w in dict])
        # for i in xrange(1, n + 1):
        #     for j in range(1, min(i, maxLength) + 1):
        #         if not f[i - j]:
        #             continue
        #         if s[i - j:i] in dict:
        #             f[i] = True
        #             break
        # return f[n]
