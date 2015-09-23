/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.sort().some(function(v, i, a) {
        if (i + 1 < a.length && v === a[i + 1]) {
            return true;
        }
        return false;
    });
};
