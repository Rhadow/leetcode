/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {
        0: 1
    };
    let result = 0;
    let sum = 0;
    nums.forEach(num => {
        sum += num;
        if (sum - k in map) {
            result += map[sum - k];
        }
        if (sum in map) {
            map[sum] += 1;
        } else {
            map[sum] = 1;
        }
    });
    return result;
};
