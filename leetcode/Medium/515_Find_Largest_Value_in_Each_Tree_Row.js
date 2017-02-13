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
var largestValues = function(root) {
    if (!root) {
        return [];
    }
    let temp = [root];
    let result = [];

    while (temp.length) {
        let levelNodes = [];
        let max = temp[0].val;
        temp.forEach(node => {
            if (node.val > max) {
                max = node.val;
            }
        });
        result.push(max);
        temp.forEach(node => {
            if (node.left) {
                levelNodes.push(node.left);
            }
            if (node.right) {
                levelNodes.push(node.right);
            }
        });
        temp = levelNodes;
    }

    return result;
};
