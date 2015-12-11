/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 1) {
        return nums.length === 0 ? 0 : nums[0];
    }

    var dp = [nums[0], Math.max(nums[0], nums[1])];

    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[dp.length - 1];
};
