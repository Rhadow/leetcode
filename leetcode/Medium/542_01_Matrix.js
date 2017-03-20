/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let result = [];
    let queue = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = []
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                result[i][j] = 0;
            } else {
                queue.push([i,j]);
            }
        }
    }
    let step = 0;
    while(queue.length) {
        let nextQueue = [];
        let deleteQueue = [];
        step += 1;
        for (let i = 0; i < queue.length; i++) {
            let [row, col] = queue[i];
            if ((row - 1 >= 0 && matrix[row - 1][col] === 0) ||
                (row + 1 < matrix.length && matrix[row + 1][col] === 0) ||
                (col - 1 >= 0 && matrix[row][col - 1] === 0) ||
                (col + 1 < matrix[row].length && matrix[row][col + 1] === 0)) {
                result[row][col] = step;
                deleteQueue.push([row,col]);
            } else {
                nextQueue.push([row,col]);
            }
        }
        queue = nextQueue;
        deleteQueue.forEach(deletePosition => {
            let [row, col] = deletePosition;
            matrix[row][col] = 0;
        });
    }
    return result;
};
