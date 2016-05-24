/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    var leftDepth = minDepth(root.left);
    var rightDepth = minDepth(root.right);

    if (leftDepth === 0) {
        return 1 + rightDepth;
    }
    if (rightDepth === 0) {
        return 1 + leftDepth;
    }

    return 1 + Math.min(leftDepth, rightDepth);
};
