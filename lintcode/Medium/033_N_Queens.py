class Solution:
    """
    Get all distinct N-Queen solutions
    @param n: The number of queens
    @return: All distinct solutions
    """
    def solveNQueens(self, n):
        # write your code here
        result = []
        def isQueenValid(m, row, col):
            if (row >= len(m) or col >= len(m)):
                return False
            res = True
            if (newMap[row]):
                return False
            for i in range(len(newMap)):
                if (newMap[i] == col):
                    return False
                if (newMap[i] is not None and math.fabs(i - row) == math.fabs(newMap[i] - col)):
                    return False
            return res
        def generateMap(row):
            res = []
            for i in range(row):
                res.append(None)
            return res
        def toStr(arr):
            res = []
            for i in arr:
                tmp = '.' * i + 'Q' + '.' * (n - 1 - i)
                res.append(tmp)
            return res

        curRow = 0
        curCol = 0
        savedCol = []
        leftQ = n
        newMap = generateMap(n)

        while (True):
            if (isQueenValid(newMap, curRow, curCol)):
                newMap[curRow] = curCol
                leftQ -= 1
                savedCol.append(curCol)
                curRow += 1
                curCol = 0
                if (curRow >= n):
                    if (leftQ == 0):
                        result.append(toStr(newMap))
                    curRow -= 1
                    leftQ += 1
                    curCol = savedCol.pop() + 1
                    newMap = newMap[:curRow] + generateMap(n - curRow)
            else:
                curCol += 1
                if (curCol >= n):
                    if curRow == 0:
                        break
                    curRow -= 1
                    leftQ += 1
                    curCol = savedCol.pop() + 1
                    newMap = newMap[:curRow] + generateMap(n - curRow)
        return result
