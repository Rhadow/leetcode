/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var sorted = nums.sort(function(a, b) { return a - b; });
    return sorted[sorted.length - k];
};
