/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var result = -1;
    var hashMap = {};

    nums.forEach(function(v) {
        hashMap[v] = true;
    });
    for (var i = 0; i < nums.length; i++) {
        if (!(i in hashMap)) {
            result = i;
            break;
        }
    }

    return result === -1 ? nums.length : result;
};
