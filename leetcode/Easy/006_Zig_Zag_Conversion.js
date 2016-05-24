/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var index, left, right, isLeft;
    var total = numRows + numRows - 2;
    var result = [];

    if (numRows === 1) {
        return s;
    }

    for (var i = numRows; i > 0; i--) {
        index = numRows - i;
        isLeft = true;
        right = 2 * (numRows - i);
        left = total - right;

        while (index < s.length) {
            result.push(s[index]);
            if (isLeft) {
                index += left !== 0 ? left : right;
                isLeft = false;
            } else {
                index += right !== 0 ? right : left;
                isLeft = true;
            }
        }
    }

    return result.join('');
};
