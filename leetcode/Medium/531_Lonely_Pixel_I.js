/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    let result = 0;
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[i].length; j++) {
            let value = picture[i][j];
            if (value === 'B' || value === 'W') {
                if (value === 'B') {
                    let blacks = countBlacks(picture, i, j);
                    if (blacks === 0) {
                        result += 1;
                    }
                    picture[i][j] = 'Y';
                }
                if (value === 'W') {
                    picture[i][j] = 'V';
                }
            }
        }
    }
    return result;
};

function countBlacks(picture, row, col) {
    let result = 0;
    for (let i = 0; i < picture[row].length; i++) {
        if (picture[row][i] === 'B' || picture[row][i] === 'Y') {
            if (i !== col) {
                result += 1;
            }
            picture[row][i] = 'Y';
        } else {
            picture[row][i] = 'V';
        }
    }
    for (let i = 0; i < picture.length; i++) {
        if (picture[i][col] === 'B' || picture[i][col] === 'Y') {
            if (i !== row) {
                result += 1;
            }
            picture[i][col] = 'Y';
        } else {
            picture[i][col] = 'V';
        }
    }
    return result;
}
