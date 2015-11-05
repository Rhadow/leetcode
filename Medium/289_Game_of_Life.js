/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (board.length !== 1 || board[0].length !== 0) {
        var lives = [];
        var liveNeighborCount = 0;

        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                liveNeighborCount = 0;
                if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] === 1) {
                    liveNeighborCount++;
                }
                if (i - 1 >= 0 && board[i - 1][j] === 1) {
                    liveNeighborCount++;
                }
                if (i - 1 >= 0 && j + 1 < board[i].length && board[i - 1][j + 1] === 1) {
                    liveNeighborCount++;
                }
                if (j - 1 >= 0 && board[i][j - 1] === 1) {
                    liveNeighborCount++;
                }
                if (j + 1 < board[i].length && board[i][j + 1] === 1) {
                    liveNeighborCount++;
                }
                if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1] === 1) {
                    liveNeighborCount++;
                }
                if (i + 1 < board.length && board[i + 1][j] === 1) {
                    liveNeighborCount++;
                }
                if (i + 1 < board.length && j + 1 < board[i].length && board[i + 1][j + 1] === 1) {
                    liveNeighborCount++;
                }
                lives.push([i, j, liveNeighborCount, board[i][j]]);
            }
        }

        lives.forEach(function(data) {
            var liveNeighbor = data[2],
                original = data[3],
                newVal = 0;

            if (liveNeighbor < 2) {
                newVal = 0;
            } else if (liveNeighbor < 4 && original === 1) {
                newVal = 1;
            } else if (liveNeighbor >= 4) {
                newVal = 0;
            } else if (liveNeighbor === 3 && original === 0) {
                newVal = 1;
            }
            board[data[0]][data[1]] = newVal;
        });
    }
};
