/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var idx1 = 0;
    var idx2 = 0;

    if (nums1.length > m) {
        nums1.splice(m, nums1.length);
    }
    if (nums2.length > n) {
        nums2.splice(n, nums2.length);
    }
    for (var i = 0; i < m + n; i++) {
        if (nums1[idx1] > nums2[idx2] || nums1[idx1] === undefined) {
            nums1.splice(idx1, 0, nums2[idx2]);
            idx2++;
        }
        idx1++;
    }
};
