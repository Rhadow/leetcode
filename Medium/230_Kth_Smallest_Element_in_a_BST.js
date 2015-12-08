/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    function traverse(r) {
        if (!r) {
            return [];
        }
        if (!r.left && !r.right) {
            return [r.val];
        }
        if (!r.left) {
            return [r.val].concat(traverse(r.right));
        }
        if (!r.right) {
            return traverse(r.left).concat([r.val]);
        }

        return traverse(r.left).concat(r.val).concat(traverse(r.right));
    }

    return traverse(root)[k - 1];
};
