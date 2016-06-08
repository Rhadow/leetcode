class Solution:
    """
    @param S: The set of numbers.
    @return: A list of lists. See example.
    """
    def subsets(self, S):
        # write your code here
        res = []
        if (not S):
            return [[]]
        tmpRes = self.subsets(S[:len(S) - 1])
        res += tmpRes
        for a in tmpRes:
            res.append(a + [S[len(S) - 1]])
        return map(sorted, res)
