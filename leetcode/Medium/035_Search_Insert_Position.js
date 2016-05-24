/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var insertIndex;

    if (nums.indexOf(target) === -1) {
        insertIndex = nums.length;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] > target) {
                insertIndex = i;
                break;
            }
        }
    }

    return insertIndex !== undefined ? insertIndex : nums.indexOf(target);
};
