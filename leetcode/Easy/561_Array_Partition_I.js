/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    return sorted.filter((n, i) => i % 2 === 0).reduce((acc, n) => acc + n, 0);
};
