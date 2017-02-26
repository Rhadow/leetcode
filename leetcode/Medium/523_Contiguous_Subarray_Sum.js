/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // Original Solution
    if (k === 0) {
        return nums.length > 1 && nums.every(num => num === 0);
    }
    let value = k < 0 ? -k : k;
    let modIndexMap = {0 : -1};
    let mods = [];
    for (let i = 0; i < nums.length; i++) {
        let mod = null;
        if (i === 0) {
            mod = nums[i] % value;
        } else {
            let sum = nums[i] + mods[i - 1];
            mod = sum % value;
        }
        mods[i] = mod
        if (!(mod in modIndexMap)) {
          modIndexMap[mod] = i;
        }
        if (mod in modIndexMap && (i - modIndexMap[mod] > 1)) {
            return true;
        }
    }
    return false;
};
