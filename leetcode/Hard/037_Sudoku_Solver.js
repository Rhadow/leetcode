/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === '.') {
                for (let i = 1; i <= 9; i++) {
                    if (validateCurrentSolution(board, i, row, col)) {
                        insertSolution(board, i, row, col);
                        solveSudoku(board);
                    }
                }
                if (checkBoardFull(board)) {
                    return;
                }
                board[row][col] = '.';
                return;
            }
        }
    }
};

function checkBoardFull(board) {
    return board.every((row) => !row.includes('.'));
}

function insertSolution(board, num, row, col) {
    board[row][col] = `${num}`;
}

function validateCurrentSolution(board, num, row, col) {
    let result = true;
    num = `${num}`;
    if (board[row].includes(num)) {
        result = false;
    }
    for (let i = 0; i < board.length; i++) {
        if (board[i][col] === num) {
            result = false;
        }
    }

    if (row % 3 === 2) {
        if (col % 3 === 2) {
            if (board[row][col - 1] === num ||
            board[row][col - 2] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col - 1] === num ||
            board[row - 1][col - 2] === num ||
            board[row - 2][col] === num ||
            board[row - 2][col - 1] === num ||
            board[row - 2][col - 2] === num
            ) {
                result = false;
            }
        } else if (col % 3 === 1) {
            if (board[row][col + 1] === num ||
            board[row][col - 1] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col + 1] === num ||
            board[row - 1][col - 1] === num ||
            board[row - 2][col] === num ||
            board[row - 2][col + 1] === num ||
            board[row - 2][col - 1] === num
            ) {
                result = false;
            }
        } else {
            if (board[row][col + 1] === num ||
            board[row][col + 2] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col + 1] === num ||
            board[row - 1][col + 2] === num ||
            board[row - 2][col] === num ||
            board[row - 2][col + 1] === num ||
            board[row - 2][col + 2] === num
            ) {
                result = false;
            }
        }
    } else if (row % 3 === 1) {
        if (col % 3 === 2) {
            if (board[row][col - 1] === num ||
            board[row][col - 2] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col - 1] === num ||
            board[row + 1][col - 2] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col - 1] === num ||
            board[row - 1][col - 2] === num
            ) {
                result = false;
            }
        } else if (col % 3 === 1) {
            if (board[row][col + 1] === num ||
            board[row][col - 1] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col + 1] === num ||
            board[row + 1][col - 1] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col + 1] === num ||
            board[row - 1][col - 1] === num
            ) {
                result = false;
            }
        } else {
            if (board[row][col + 1] === num ||
            board[row][col + 2] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col + 1] === num ||
            board[row + 1][col + 2] === num ||
            board[row - 1][col] === num ||
            board[row - 1][col + 1] === num ||
            board[row - 1][col + 2] === num
            ) {
                result = false;
            }
        }
    } else {
        if (col % 3 === 2) {
            if (board[row][col - 1] === num ||
            board[row][col - 2] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col - 1] === num ||
            board[row + 1][col - 2] === num ||
            board[row + 2][col] === num ||
            board[row + 2][col - 1] === num ||
            board[row + 2][col - 2] === num
            ) {
                result = false;
            }
        } else if (col % 3 === 1) {
            if (board[row][col + 1] === num ||
            board[row][col - 1] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col + 1] === num ||
            board[row + 1][col - 1] === num ||
            board[row + 2][col] === num ||
            board[row + 2][col + 1] === num ||
            board[row + 2][col - 1] === num
            ) {
                result = false;
            }
        } else {
            if (board[row][col + 1] === num ||
            board[row][col + 2] === num ||
            board[row + 1][col] === num ||
            board[row + 1][col + 1] === num ||
            board[row + 1][col + 2] === num ||
            board[row + 2][col] === num ||
            board[row + 2][col + 1] === num ||
            board[row + 2][col + 2] === num
            ) {
                result = false;
            }
        }
    }
    return result;
}
