/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var zeroes = [];

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push([i, j]);
            }
        }
    }
    zeroes.forEach(function(axis) {
        for (var j = 0; j < matrix[axis[0]].length; j++) {
            matrix[axis[0]][j] = 0;
        }
        for (var i = 0; i < matrix.length; i++) {
            matrix[i][axis[1]] = 0;
        }
    });
};
