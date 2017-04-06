/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // O(n) solution
    let [left, right] = [0, 0];
    let sorted = [];
    let totalLength = nums1.length + nums2.length;
    if (nums1.length === 0) {
        nums1 = [Infinity];
    }
    if (nums2.length === 0) {
        nums2 = [Infinity];
    }
    while (sorted.length <= Math.floor(totalLength / 2)) {
        if (left >= nums1.length) {
            sorted.push(nums2[right]);
            right++
        } else if (right >= nums2.length) {
            sorted.push(nums1[left]);
            left++;
        } else {
            if (nums1[left] < nums2[right]) {
                sorted.push(nums1[left]);
                left++;
            } else {
                sorted.push(nums2[right]);
                right++
            }
        }
    }
    return totalLength % 2 === 0 ? (sorted[sorted.length - 1] + sorted[sorted.length - 2]) / 2: sorted[sorted.length - 1];
};
