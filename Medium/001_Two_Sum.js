/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    nums.forEach(function(n, i) {
        hash[n] = i + 1;
    });
    for (var i = 0; i < nums.length; i++) {
        var searchTarget = target - nums[i];
        if (searchTarget in hash && hash[searchTarget] > i + 1) {
            return [i + 1, hash[searchTarget]];
        }
    }
};
