class Solution:
    """
    @param obstacleGrid: An list of lists of integers
    @return: An integer
    """
    def uniquePathsWithObstacles(self, obstacleGrid):
        # write your code here
        res = []
        for i in range(len(obstacleGrid)):
            res.append([])
            for j in range(len(obstacleGrid[i])):
                if (obstacleGrid[i][j] == 1):
                    res[i].append(0)
                else:
                    if (i == 0 and j == 0):
                        res[i].append(1)
                    else:
                        top = res[i][j - 1] if j - 1 >= 0 else 0
                        left = res[i - 1][j] if i - 1 >= 0 else 0
                        res[i].append(top + left)
        return res[-1][-1]
