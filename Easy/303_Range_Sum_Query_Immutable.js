/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [nums[0]];
    for (i = 1; i < nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var leftOver = i - 1 < 0 ? 0 : this.sums[i - 1];
    return this.sums[j] - leftOver ;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
