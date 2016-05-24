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
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [root.val];
    }
    var left = preorderTraversal(root.left);
    var right = preorderTraversal(root.right);

    return [root.val].concat(left).concat(right);
};
