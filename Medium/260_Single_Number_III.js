/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    return nums.sort().filter(function(n, i, a) {
        var firstIndex = a.indexOf(n);
        if (a.indexOf(n, firstIndex + 1) >= 0) {
            return false;
        }
        return true;
    });
};
