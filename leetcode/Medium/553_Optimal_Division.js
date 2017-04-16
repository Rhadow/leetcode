/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) {
        return nums[0].toString(10);
    }
    if (nums.length === 2) {
        return `${nums[0]}/${nums[1]}`;
    }
    const restString = nums.slice(1).join('/');
    return `${nums[0]}/(${restString})`
};
