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
var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }
    let localDiameter = maxLength(root.left) + maxLength(root.right);
    let leftDiameter = diameterOfBinaryTree(root.left);
    let rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(localDiameter, leftDiameter, rightDiameter);
};

function maxLength(root) {
    if (!root) {
        return 0;
    }
    let leftMax = maxLength(root.left);
    let rightMax = maxLength(root.right);
    return 1 + Math.max(leftMax, rightMax);
}
