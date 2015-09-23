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
var isSymmetric = function(root) {

    function isSymetricNode(p, q) {
        var leftP, rightP, leftQ, rightQ;

        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }

        leftP = !p.left ? null : p.left.val;
        rightP = !p.right ? null : p.right.val;
        leftQ = !q.left ? null : q.left.val;
        rightQ = !q.right ? null : q.right.val;

        return leftP === rightQ && rightP === leftQ && p.val === q.val && 
            isSymetricNode(p.left, q.right) && isSymetricNode(p.right, q.left);
    }

    return !root ? true : isSymetricNode(root.left, root.right);
};
