/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const clickedRow = click[0];
    const clickedCol = click[1];

    if (board[clickedRow][clickedCol] === 'M') {
        board[clickedRow][clickedCol] = 'X';
    } else if (board[clickedRow][clickedCol] === 'E') {
        const surroundingBombs = countSurroundingBombs(board, clickedRow, clickedCol);
        if (surroundingBombs === 0) {
            let rows = [clickedRow - 1, clickedRow, clickedRow + 1].filter(row => row >= 0 && row < board.length);
            let cols = [clickedCol - 1, clickedCol, clickedCol + 1].filter(col => col >= 0 && col < board[clickedRow].length);
            board[clickedRow][clickedCol] = 'B';
            for (let i = 0; i < rows.length; i++) {
                for (let j = 0; j < cols.length; j++) {
                   if (rows[i] !== clickedRow || cols[j] !== clickedCol) {
                        updateBoard(board, [rows[i], cols[j]]);
                    }
                }
            }
        } else {
            board[clickedRow][clickedCol] = parseInt(surroundingBombs, 10);
        }
    }
    return board;
};

function countSurroundingBombs(board, rowIndex, colIndex) {
    let result = 0;
    let rows = [rowIndex - 1, rowIndex, rowIndex + 1].filter(row => row >= 0 && row < board.length);
    let cols = [colIndex - 1, colIndex, colIndex + 1].filter(col => col >= 0 && col < board[rowIndex].length);
    rows.forEach(row => {
        cols.forEach(col => {
            if (row !== rowIndex || col !== colIndex) {
                result += (board[row][col] === 'M') ? 1 : 0;
            }
        });
    });
    return result;
}
