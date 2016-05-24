/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [],
        temp = [];

    for (var i = 0; i < numRows; i++) {
        if (i === 0) {
            result.push([1]);
        } else if (i === 1) {
            result.push([1,1]);
        } else {
            temp = [];
            for (var j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    temp.push(1);
                } else {
                    temp.push(result[i - 1][j - 1] + result[i - 1][j]);
                }
            }
            result.push(temp);
        }
    }

    return result;
};
