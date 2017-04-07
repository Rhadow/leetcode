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
var maxPathSum = function(root) {
    return helper(root)[0];
};

function helper(root) {
    if (!root) {
        return [-Infinity, 0];
    }
    const [leftTotal, leftSingle] = helper(root.left);
    const [rightTotal, rightSingle] = helper(root.right);
    const total = Math.max(leftTotal, rightTotal, leftSingle + root.val + rightSingle);
    const single = Math.max(root.val + leftSingle, root.val + rightSingle, 0);
    return [total, single];
}
