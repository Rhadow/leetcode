/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var left = [], right = [];
    if (!root) {
        return [];
    }
    if (root.left) {
        left = binaryTreePaths(root.left);
        left.forEach(function(v, i) {
            left[i] = root.val + '->' + v;
        });
    }
    if (root.right) {
        right = binaryTreePaths(root.right);
        right.forEach(function(v, i) {
            right[i] = root.val + '->' + v;
        });
    }
    if (!root.left && !root.right) {
        return ['' + root.val];
    }
    return left.concat(right);
};
