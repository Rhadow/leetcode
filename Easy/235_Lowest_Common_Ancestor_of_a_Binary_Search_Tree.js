/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root && p.val < root.val && q.val < root.val && root.left) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root && p.val > root.val && q.val > root.val && root.right) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
