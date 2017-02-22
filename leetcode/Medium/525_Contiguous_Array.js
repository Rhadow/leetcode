/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // original solution
    // nums = nums.map(n => n === 0 ? -1 : 1);
    // let sums = [nums[0]];
    // for (let i = 1; i < nums.length; i++) {
    //     sums[i] = sums[i - 1] + nums[i];
    // }
    // let map = {0: -1};
    // let result = 0;
    // for (let i = 0; i < sums.length; i++) {
    //     if (sums[i] in map) {
    //         result = Math.max(result, i - map[sums[i]]);
    //     } else {
    //         map[sums[i]] = i;
    //     }
    // }
    // return result;

    // O(n) solution
    let result = 0;
    let map = {0: 0};
    let count = 0
    nums.forEach((num, index) => {
        count += (num === 1 ? 1 : -1);
        if (count in map) {
            result = Math.max(result, index + 1 - map[count]);
        } else {
            map[count] = index + 1;
        }
    });
    return result;
};
