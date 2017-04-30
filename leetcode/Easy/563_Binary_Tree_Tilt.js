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
var findTilt = function(root) {
    const tilts = [];
    tiltValuePair(root, tilts);
    return tilts.reduce((acc, n) => acc + n, 0);
};

function tiltValuePair(root, tilts) {
    if (!root) {
        return 0;
    }
    const leftSum = tiltValuePair(root.left, tilts);
    const rightSum = tiltValuePair(root.right, tilts);
    tilts.push(Math.abs(leftSum - rightSum));
    return leftSum + rightSum + root.val;
}
