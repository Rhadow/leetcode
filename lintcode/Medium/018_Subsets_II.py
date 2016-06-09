class Solution:
    """
    @param S: A set of numbers.
    @return: A list of lists. All valid subsets.
    """
    def subsetsWithDup(self, S):
        # write your code here

        # Revursive
        if (not S):
            return [[]]
        S = sorted(S)
        tmp = self.subsetsWithDup(S[:-1])
        locked = True
        res = [] + tmp
        count = 0
        for i in S[:-1]:
            if (i == S[-1]):
                count += 1
        for i in tmp:
            if ([S[-1]] * count == i):
                locked = False
            if (not locked):
                res.append(i + [S[-1]])
        return res

        # Iterative
        # res = [[]]
        # S = sorted(S)
        # for index, v in enumerate(S):
        #     locked = True
        #     count = 0
        #     for j in S[:index]:
        #         if (j == v):
        #             count += 1
        #     tmp = []
        #     for a in res:
        #         if ([v]*count == a):
        #             locked = False
        #         if (not locked):
        #             tmp.append(a + [v])
        #     res += tmp
        # return res
