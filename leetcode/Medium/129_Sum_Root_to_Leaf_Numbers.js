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
var sumNumbers = function(root) {
    function getLeafs(r) {
        var childs = [];
        if (!r) {
            return [];
        } else if (!r.left && !r.right) {
            return [r.val.toString()];
        } else if (!r.right) {
            childs = getLeafs(r.left);
        } else if (!r.left) {
            childs = getLeafs(r.right);
        } else {
            childs = getLeafs(r.left).concat(getLeafs(r.right));
        }
        return childs.map(function(leaf) {
            return r.val + leaf;
        });
    }
    var leafs = getLeafs(root);

    return leafs.reduce(function(acc, x) {
        return acc + parseInt(x);
    }, 0);
};
