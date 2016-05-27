class Solution:
    """
    @param n and m: positive integer(1 <= n , m <= 100)
    @return an integer
    """ 
    def uniquePaths(self, m, n):
        # write your code here
        list = []
        for i in range(m):
            list.append([])
            for j in range(n):
                if (i == 0 and j == 0):
                    list[i].append(0)
                elif (j == 0 or i == 0):
                    list[i].append(1)
                else:
                    list[i].append(list[i - 1][j] + list[i][j - 1])
        return list[m - 1][n - 1]
