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
var findBottomLeftValue = function(root) {
    let temp = [root];
    let finalLevel = null;

    while (temp.length) {
        let levelNodes = [];
        temp.forEach(node => {
            if (node.left) {
                levelNodes.push(node.left);
            }
            if (node.right) {
                levelNodes.push(node.right);
            }
        });
        if (levelNodes.length === 0) {
            finalLevel = temp;
        }
        temp = levelNodes;
    }

    return finalLevel[0].val;
};
