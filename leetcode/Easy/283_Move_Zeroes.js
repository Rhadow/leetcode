/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var n = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            n++;
            i--;
        }
    }
    for (var j = 0; j < n; j++) {
        nums.push(0);
    }
};
