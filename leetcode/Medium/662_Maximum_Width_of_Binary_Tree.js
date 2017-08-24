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
var widthOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [{n: 1, node: root}];
    let len = 2;
    let level = [];
    let result = 0;
    while (queue.length) {
        let {n, node} = queue.shift();
        if (n >= len) {
            let range = level[level.length - 1] - level[0] + 1;
            if (range > result) {
                result = range;
            }
            len *= 2;
            level = [];
        }
        level.push(n);
        if (node.left) {
            queue.push({n: 2 * n, node: node.left});
        }
        if (node.right) {
            queue.push({n: 2 * n + 1, node: node.right});
        }
    }
    let range = level[level.length - 1] - level[0] + 1;
    if (range > result) {
        result = range;
    }
    return result;
};
