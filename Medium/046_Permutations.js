/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var subArr, subArrResult;

    if (nums.length < 2) {
        return [nums];
    }
    for (var i = 0; i < nums.length; i++) {
        subArr = nums.slice(0);
        subArr.splice(i, 1);
        subArrResult = permute(subArr);
        for (var j = 0; j < subArrResult.length; j++) {
            subArrResult[j].unshift(nums[i]);
            result.push(subArrResult[j]);
        }
    }

    return result;
};
