/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let result = nums[0];
    let dp = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        let temp = dp.map(t => t * nums[i]).concat([nums[i]]);
        result = Math.max(...temp, result);
        dp = [Math.max(...temp), Math.min(...temp)];
    }
    return result;
};