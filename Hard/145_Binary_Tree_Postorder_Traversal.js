/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [root.val];
    }
    var left = postorderTraversal(root.left);
    var right = postorderTraversal(root.right);

    return left.concat(right).concat([root.val]);
};
