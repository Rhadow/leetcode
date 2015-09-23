/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return 0;
    }
    var result = 0;
    nums.sort().forEach(function(v, i, a) {
        var left = i - 1 < 0 ? v - 1 : a[i - 1];
        var right = i + 1 >= a.length ? v - 1 : a[i + 1];
        var isRepetitive = (v === left && v !== right) || (v !== left && v === right);
        if (!isRepetitive) { result = v; }
    });
    return result;
};
