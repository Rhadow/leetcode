class Solution:
    """
    @param S: The set of numbers.
    @return: A list of lists. See example.
    """
    def subsets(self, S):
        # write your code here

        # Recursive
        res = []
        S = sorted(S)
        if (not S):
            return [[]]
        tmpRes = self.subsets(S[:-1])
        res += tmpRes
        for a in tmpRes:
            res.append(a + [S[-1]])
        return res

        # Iterative
        # res = [[]]
        # S = sorted(S)
        # for i in S:
        #     tmp = []
        #     for a in res:
        #         tmp.append(a + [i])
        #     res += tmp
        # return res
