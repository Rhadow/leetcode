/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var start = 0,
        end = 0,
        result = [];

    if (nums.length === 0) {
        return [];
    }
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            if (start === end) {
                result.push('' + nums[start]);
            } else {
                result.push(nums[start] + '->' + nums[end]);
            }
            start = i;
        }
        end = i;
    }
    if (start === end) {
        result.push('' + nums[start]);
    } else {
        result.push(nums[start] + '->' + nums[end]);
    }

    return result;
};
