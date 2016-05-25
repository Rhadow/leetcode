class Solution:
    """
    @param matrix, a list of lists of integers
    @param target, an integer
    @return a boolean, indicate whether matrix contains target
    """
    def searchMatrix(self, matrix, target):
        # write your code here
        i, j = len(matrix) - 1, 0
        while (i >= 0 and j < len(matrix[i])):
            if (matrix[i][j] == target):
                return True
            elif (matrix[i][j] < target):
                j += 1
            else:
                i -= 1
        return False
