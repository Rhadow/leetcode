/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var cols = [];
    var tempCol = [];
    var squares = [[], [], [], [], [], [], [], [], []];

    function checkRepeated (arr) {
        var result = true;
        arr.forEach(function(row, i, a) {
            row.filter(function(n) {
                return parseInt(n);
            }).sort().forEach(function(n, index, a) {
                if (a.indexOf(n, index + 1) >= 0) {
                    result = false;
                }
            });
        });
        return result;
    }

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            tempCol.push(board[j][i]);
        }
        cols.push(tempCol);
        tempCol = [];
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (i < 3 && j < 3) {
                squares[0].push(board[i][j]);
            } else if (i < 3 && j < 6) {
                squares[1].push(board[i][j]);
            } else if (i < 3 && j < 9) {
                squares[2].push(board[i][j]);
            } else if (i < 6 && j < 3) {
                squares[3].push(board[i][j]);
            } else if (i < 6 && j < 6) {
                squares[4].push(board[i][j]);
            } else if (i < 6 && j < 9) {
                squares[5].push(board[i][j]);
            } else if (i < 9 && j < 3) {
                squares[6].push(board[i][j]);
            } else if (i < 9 && j < 6) {
                squares[7].push(board[i][j]);
            } else if (i < 9 && j < 9) {
                squares[8].push(board[i][j]);
            }
        }
    }

    return checkRepeated(board) && checkRepeated(cols) && checkRepeated(squares);
};
