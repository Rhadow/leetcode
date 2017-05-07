/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    return traverse(s, t, false);
};

function traverse(s, t, isImmediate) {
    if ((!s && t) || (s && !t)) {
        return false;
    }
    if (!s && !t) {
        return true;
    }
    if (s.val === t.val && !s.left && !s.right && !t.left && !t.right) {
        return true;
    }
    if (s.val === t.val) {
        return traverse(s.left, t.left, true) && traverse(s.right, t.right, true) || traverse(s.left, t, false) || traverse(s.right, t, false);
    } else {
        if (isImmediate) {
            return false;
        } else {
            return traverse(s.left, t) || traverse(s.right, t);
        }
    }
}
