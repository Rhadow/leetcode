/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (var i = 0; i < nums.length; i++) {
        var j = nums.length - 1;
        while (j !== i) {
            if (nums[i] === nums[j] && j - i <= k) {
                return true;
            }
            j--;
        }
    }
    return false;
};
