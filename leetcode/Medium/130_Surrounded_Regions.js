/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (row === 0 || col === board[row].length - 1 || row === board.length - 1 || col === 0) {
                if (board[row][col] === 'O') {
                    dfs(row, col, board);
                }
            }
        }
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 'Y') {
                board[row][col] = 'O';
            } else {
                board[row][col] = 'X';
            }
        }
    }
};

function dfs(row, col, board) {
    let stack = [[row, col]];
    board[row][col] = 'Y';
    while (stack.length) {
        let [curRow, curCol] = stack.pop();
        board[curRow][curCol] = 'Y';
        if (curRow - 1 >= 0 && board[curRow - 1][curCol] === 'O') {
            stack.push([curRow - 1, curCol]);
        }
        if (curRow + 1 <= board.length - 1 && board[curRow + 1][curCol] === 'O') {
            stack.push([curRow + 1, curCol]);
        }
        if (curCol - 1 >= 0 && board[curRow][curCol - 1] === 'O') {
            stack.push([curRow, curCol - 1]);
        }
        if (curCol + 1 <= board[curRow].length - 1 && board[curRow][curCol + 1] === 'O') {
            stack.push([curRow, curCol + 1]);
        }
    }
}
