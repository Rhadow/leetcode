/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var result = 0;

    for (var i = 5; i <= n; i*=5) {
        result += Math.floor(n / i);
    }

    return result;
};
