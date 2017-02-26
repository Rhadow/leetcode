/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    // Original Solution
    const clickedRow = click[0];
    const clickedCol = click[1];
    if (board[clickedRow][clickedCol] === 'M') {
        board[clickedRow][clickedCol] = 'X';
    } else if (board[clickedRow][clickedCol] === 'E') {
        const surroundingBombs = countSurroundingBombs(board, clickedRow, clickedCol);
        if (surroundingBombs === 0) {
            board[clickedRow][clickedCol] = 'B';
            // Top
            if (clickedRow - 1 >= 0) {
                if (clickedCol - 1 >= 0) {
                    updateBoard(board, [clickedRow - 1, clickedCol - 1]);
                }
                if (clickedCol + 1 < board[clickedRow].length) {
                    updateBoard(board, [clickedRow - 1, clickedCol + 1]);
                }
                updateBoard(board, [clickedRow - 1, clickedCol]);
            }
            // Bottom
            if (clickedRow + 1 < board.length) {
                if (clickedCol - 1 >= 0) {
                    updateBoard(board, [clickedRow + 1, clickedCol - 1]);
                }
                if (clickedCol + 1 < board[clickedRow].length) {
                    updateBoard(board, [clickedRow + 1, clickedCol + 1]);
                }
                updateBoard(board, [clickedRow + 1, clickedCol]);
            }
            // Middle
            if (clickedCol - 1 >= 0) {
                updateBoard(board, [clickedRow, clickedCol - 1]);
            }
            if (clickedCol + 1 < board[clickedRow].length) {
                updateBoard(board, [clickedRow, clickedCol + 1]);
            }
        } else {
            board[clickedRow][clickedCol] = parseInt(surroundingBombs, 10);
        }
    }

    return board;
};

function countSurroundingBombs(board, rowIndex, colIndex) {
    let result = 0;
    // Top
    if (rowIndex - 1 >= 0) {
        if (colIndex - 1 >= 0) {
            result += (board[rowIndex - 1][colIndex - 1] === 'M') ? 1 : 0;
        }
        if (colIndex + 1 < board[rowIndex].length) {
            result += (board[rowIndex - 1][colIndex + 1] === 'M') ? 1 : 0;
        }
        result += (board[rowIndex - 1][colIndex] === 'M') ? 1 : 0;
    }
    // Bottom
    if (rowIndex + 1 < board.length) {
        if (colIndex - 1 >= 0) {
            result += (board[rowIndex + 1][colIndex - 1] === 'M') ? 1 : 0;
        }
        if (colIndex + 1 < board[rowIndex].length) {
            result += (board[rowIndex + 1][colIndex + 1] === 'M') ? 1 : 0;
        }
        result += (board[rowIndex + 1][colIndex] === 'M') ? 1 : 0;
    }
    // Middle
    if (colIndex - 1 >= 0) {
        result += (board[rowIndex][colIndex - 1] === 'M') ? 1 : 0;
    }
    if (colIndex + 1 < board[rowIndex].length) {
        result += (board[rowIndex][colIndex + 1] === 'M') ? 1 : 0;
    }
    return result;
}
