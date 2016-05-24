/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hashMap = {};
    var min = Number.MIN_VALUE;
    var result = 0;
    nums.forEach(function(n) {
        hashMap[n] = hashMap[n] ? hashMap[n] + 1 : 1;
    });
    for (var i in hashMap) {
        if (hashMap[i] > min) {
            min = hashMap[i];
            result = +i;
        }
    }
    return result;
};
