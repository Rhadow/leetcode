/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let targetSums = [];
    for (let i = 0; i <= target; i++) {
        targetSums[i] = 0;
        nums.forEach(num => {
            if (i - num >= 0) {
                targetSums[i] += (i - num === 0) ? 1 : targetSums[i - num];
            }
        });
    }
    return targetSums[targetSums.length - 1];
};
