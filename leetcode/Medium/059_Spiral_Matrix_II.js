/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [];
    let row = 0; col = 0;
    let isColChanging = true;
    let isColIncreasing = true;
    let isRowIncreasing = true;
    let [rowMinLimit, rowMaxLimit] = [1, n];
    let [colMinLimit, colMaxLimit] = [0, n];
    let num = 1;
    while (num <= n * n) {
        if (!result[row]) {
            result[row] = [];
        }
        result[row][col] = num;
        num += 1;

        if (isColChanging) {
            if (isColIncreasing) {
                if (col + 1 === colMaxLimit) {
                    isColChanging = !isColChanging;
                    isColIncreasing = !isColIncreasing;
                    colMaxLimit -= 1;
                    row += 1;
                } else {
                    col += 1;
                }
            } else {
                if (col - 1 < colMinLimit) {
                    isColChanging = !isColChanging;
                    isColIncreasing = !isColIncreasing;
                    colMinLimit += 1;
                    row -= 1;
                } else {
                    col -= 1;
                }
            }
        } else {
            if (isRowIncreasing) {
                if (row + 1 === rowMaxLimit) {
                    isColChanging = !isColChanging;
                    isRowIncreasing = !isRowIncreasing;
                    rowMaxLimit -= 1;
                    col -= 1;
                } else {
                    row += 1;
                }
            } else {
                if (row - 1 < rowMinLimit) {
                    isColChanging = !isColChanging;
                    isRowIncreasing = !isRowIncreasing;
                    rowMinLimit += 1;
                    col += 1;
                } else {
                    row -= 1;
                }
            }
        }
    }
    return result;
};
