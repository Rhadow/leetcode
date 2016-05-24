/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = {};

    nums1.forEach(function(item) {
        map[item] = 1;
    });
    nums2.forEach(function(item) {
        if (map[item]) {
            map[item] += 1;
        }
    });

    return Object.keys(map).filter(function(k) {
        return map[k] > 1;
    }).map(function(k) { return +k; });

};
