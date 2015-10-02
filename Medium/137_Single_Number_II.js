/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hash = {};

    nums.forEach(function(v) {
        hash[v] = hash[v] ? hash[v] + 1 : 1;
    });
    for (var key in hash) {
        if (hash[key] !== 3) {
            return +key;
        }
    }
};
