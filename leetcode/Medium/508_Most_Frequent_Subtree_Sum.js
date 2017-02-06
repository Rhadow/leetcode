/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let sums = {}, result = [], max = 1;
    traverse(root, sums);
    for (let key in sums) {
        if (sums[key] > max) {
            max = sums[key];
        }
    }
    for (let key in sums) {
        if (sums[key] === max) {
            result.push(parseInt(key, 10));
        }
    }
    return result;
};

function getTreeSum(root) {
    if (!root) {
        return 0;
    }
    return root.val + getTreeSum(root.left) + getTreeSum(root.right)
}

function traverse(root, sums) {
    if (!root) {
        return;
    }
    let sum = getTreeSum(root);
    sums[sum] = sum in sums ? sums[sum] + 1 : 1;
    traverse(root.left, sums);
    traverse(root.right, sums);
}
