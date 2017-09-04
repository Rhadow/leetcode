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
var findSecondMinimumValue = function(root) {
    if (!root || !root.left) {
        return -1;
    }
    let leftMin = root.val === root.left.val ? findNextBiggerNum(root.left) : root.left.val;
    let rightMin = root.val === root.right.val ? findNextBiggerNum(root.right) : root.right.val;
    if (leftMin === rightMin) {
        if (leftMin === Infinity || leftMin === root.val) {
            return -1;
        }
        return leftMin;
    }
    return leftMin > rightMin ? rightMin : leftMin;
};

function findNextBiggerNum(root) {
    if (!root.left) {
        return Infinity;
    }
    if (root.left.val > root.val && root.right.val > root.val) {
        return root.left.val < root.right.val ? root.left.val : root.right.val;
    }
    if (root.left.val > root.val) {
        return root.left.val;
    }
    if (root.right.val > root.val) {
        return root.right.val;
    }
    return Math.min(findNextBiggerNum(root.left), findNextBiggerNum(root.right));
}
