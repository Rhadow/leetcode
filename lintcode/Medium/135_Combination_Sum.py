class Solution:
    # @param candidates, a list of integers
    # @param target, integer
    # @return a list of lists of integers
    def combinationSum(self, candidates, target):
        # write your code here

        # DP
        # dp = [[[]]]
        # for t in range(1, target + 1):
        #     tmpRes = []
        #     for c in candidates:
        #         prev = dp[t - c] if t - c >= 0 else []
        #         tmp = [] + prev
        #         for i, p in enumerate(tmp):
        #             tmp[i] = p + [c]
        #             tmp[i] = sorted(tmp[i])
        #         tmpRes += tmp
        #     dp.append(tmpRes)
        # i = 0
        # while (i < len(dp[target]) - 1):
        #     if (dp[target][i] in dp[target][i + 1:]):
        #         dp[target].pop(i)
        #     else:
        #         i += 1
        # return dp[target]

        # Backtracking
        if (not candidates):
            return [[]]
        res = []
        indexes = [0]
        currentVal = 0
        while (indexes):
            currentIndex = indexes[-1]
            if (currentIndex >= len(candidates)):
                indexes.pop()
                if (not indexes):
                    break
                currentVal -= candidates[indexes[-1]]
                indexes[-1] = indexes[-1] + 1
            else:
                currentVal += candidates[currentIndex]
                if (currentVal < target):
                    indexes.append(0)
                else:
                    if (currentVal == target):
                        tmp = []
                        for i in indexes:
                            tmp.append(candidates[i])
                        res.append(sorted(tmp))
                    currentIndex = indexes.pop()
                    currentVal -= candidates[currentIndex]
                    currentIndex += 1
                    indexes.append(currentIndex)
        i = 0
        while (i < len(res) - 1):
            if (res[i] in res[i + 1:]):
                res.pop(i)
            else:
                i += 1
        return res
