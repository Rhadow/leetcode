/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1,1];
    }

    return getRow(rowIndex - 1).map(function(v, i, a) {
        if (i === 0) {
            return v;
        }
        return v + a[i - 1];
    }).concat([1]);
};
