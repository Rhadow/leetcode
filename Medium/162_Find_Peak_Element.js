/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return nums.map(function(n, i, a) {
        var left = i - 1 < 0 ? Number.NEGATIVE_INFINITY : a[i - 1],
            right = i + 1 >= a.length ? Number.NEGATIVE_INFINITY : a [i + 1];
        if (n > left && n > right) {
            return i;
        }
    }).filter(function(n) { return n !== undefined; })[0];
};
