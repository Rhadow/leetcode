/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var result = 0;

    prices.forEach(function(v, i, a) {
        if (i + 1 < a.length && a[i + 1] > v) {
            result += a[i + 1] - v;
        }
    });

    return result;
};
