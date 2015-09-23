/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.splice(nums.length - k, k).reverse().forEach(function(val) {nums.unshift(val)});
};
