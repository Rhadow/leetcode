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
var getMinimumDifference = function(root) {
    const sorted = inOrderTraversal(root);
    let result = Infinity;
    for (let i = 1; i < sorted.length; i++) {
        let temp = sorted[i] - sorted[i - 1];
        result = temp < result ? temp : result;
    }
    return result;
};

function inOrderTraversal(root) {
    if (!root) {
        return [];
    }
    let left = [];
    let right = [];
    if (root.left) {
        left = inOrderTraversal(root.left);
    }
    if (root.right) {
        right = inOrderTraversal(root.right);
    }
    return left.concat([root.val]).concat(right)
}
