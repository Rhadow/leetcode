/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    if (!root.left && root.right) {
        root.left = invertTree(root.right);
        root.right = null;
        return root;
    }
    if (root.left && !root.right) {
        root.right = invertTree(root.left);
        root.left = null;
        return root;
    }
    if (!root.left && !root.right) {
        return root;
    }
    var temp = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(temp);
    return root;
};
