/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let result = 0;
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            if (M[i][j] === 1) {
                result += 1;
                markZero(M, i, j);
            }
        }
    }
    return result;
};

function markZero(M, row, col) {
    M[row][col] = 0;
    for (let i = 0; i < M[row].length; i++) {
        if (M[row][i] === 1) {
            M[row][i] = 0;
            if (row !== i) {
                markZero(M, i, row);
            }
        }
    }
}
