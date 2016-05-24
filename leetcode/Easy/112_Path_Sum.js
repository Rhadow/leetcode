/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

    function getSums(tree) {
        if (!tree) {
            return [];
        }
        if (!tree.left && !tree.right) {
            return [tree.val];
        }

        return getSums(tree.left).map(function(val) { return tree.val + val; })
            .concat(getSums(tree.right).map(function(val) { return tree.val + val; }));
    }

    return getSums(root).indexOf(sum) >= 0;
};
