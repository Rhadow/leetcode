/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    var mid = Math.floor(nums.length / 2)
    var left = sortedArrayToBST(nums.slice(0, mid));
    var right = sortedArrayToBST(nums.slice(mid + 1));
    var node = new TreeNode(nums[mid]);

    node.left = left;
    node.right = right;

    return node;
};