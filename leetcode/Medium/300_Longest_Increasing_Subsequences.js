/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length === 0 ? 0 : 1;
    }
    var dp = [],
        temp;

    for (var i = 0; i < nums.length; i++) {
        temp = 1;
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                temp = Math.max(dp[j] + 1, temp);
            }
        }
        dp.push(temp);
    }

    return dp.reduce(function(a, b) {
        return a > b ? a : b;
    });
};
