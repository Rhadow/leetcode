class Solution:
    """
    @param triangle: a list of lists of integers.
    @return: An integer, minimum path sum.
    """
    def minimumTotal(self, triangle):
        # write your code here
        res = triangle[0]
        for i in range(1, len(triangle)):
            for j in range(len(triangle[i]) - 1, -1, -1):
                left = triangle[i][j] + (res[j] if j < len(res) else sys.maxint)
                right = triangle[i][j] + (res[j - 1] if j - 1 >= 0 else sys.maxint)
                if (j >= len(res)):
                    res.append(min(left, right))
                else:
                    res[j] = min(left, right)
        return min(res)
