/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [];
    let result = -Infinity;
    nums.forEach(num => {
        if (dp.length === 0) {
            dp.push(num);
            result = num;
        } else {
            let localResult = Math.max(num, num + dp[dp.length - 1]);
            dp.push(localResult);
            result = Math.max(localResult, result);
        }
    });
    return result;
};
