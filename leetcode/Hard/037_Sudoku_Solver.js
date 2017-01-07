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
    num = `${num}`;
    if (board[row].includes(num)) {
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        if (board[i][col] === num) {
            return false;
        }
    }
    for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
        for (let j = Math.floor(col / 3) * 3; j < Math.floor(col / 3) * 3 + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }
    return true;
}
