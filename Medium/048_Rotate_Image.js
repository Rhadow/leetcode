/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i; j < matrix[i].length; j++) {
            if (i === j) {
                continue;
            }
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};
