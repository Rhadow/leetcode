/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    var temp1 = [1];
    var temp2 = [1];
    var temp1Val = 1;
    var temp2Val = 1;

    for (var i = 0; i < nums.length - 1; i++) {
        temp1Val *= nums[i];
        temp1.push(temp1Val);
    }
    for (var j = nums.length - 1; j > 0; j--) {
        temp2Val *= nums[j];
        temp2.unshift(temp2Val);
    }
    for (var k = 0; k < nums.length; k++) {
        result[k] = temp1[k] * temp2[k];
    }

    return result;
};
