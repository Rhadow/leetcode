/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function treeHeight(tree) {
        return !tree ? 1 : 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
    }
    return !root || (isBalanced(root.left) && isBalanced(root.right) && Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1);
};
