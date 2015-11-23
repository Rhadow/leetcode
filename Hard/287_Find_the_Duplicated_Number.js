/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var sortedArr = nums.slice(0).sort(function(a, b) { return a - b;});
    for (var i = 1; i < sortedArr.length; i++) {
    	if (sortedArr[i] === sortedArr[i - 1]) {
    		return sortedArr[i];
    	}
    }
};
