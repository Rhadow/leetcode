class Solution:
    """
    @param n: Given the range of numbers
    @param k: Given the numbers of combinations
    @return: All the combinations of k numbers out of 1..n
    """
    def combine(self, n, k):
        # write your code here
        if (k == 0):
            return [[]]
        if (n == 0):
            return []
        res = []
        for i in range(n, 0, -1):
            tmp = self.combine(i - 1, k - 1)
            for a in tmp:
                a.append(i)
            res += tmp
        return res
