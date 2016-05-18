/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [], temp;
    if (k === 0) {
        return result;
    }
    if (k === 1) {
        for (var i = n; i > 0; i--) {
            result.push([i]);
        }
        return result;
    }
    for (var i = n; i > 0; i--) {
        temp = combine(i - 1, k - 1);
        temp = temp.map(function(item) {
            return item.concat([i]);
        });
        result = result.concat(temp);
    }
    return result;
};
