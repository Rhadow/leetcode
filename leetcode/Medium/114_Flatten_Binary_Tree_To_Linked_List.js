/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let queue = [];
    let current = root;
    let rightTree;
    const traverseLeft = () => {
        while (current && current.left) {
            if (current.right) {
                queue.push(current.right);
            }
            current.right = current.left;
            current.left = null;
            current = current.right;
        }
        if (current && current.right) {
            queue.push(current.right);
        }
    }

    traverseLeft();
    while (queue.length > 0) {
        rightTree = queue.pop();
        current.right = rightTree;
        current = current.right;
        traverseLeft();
    }
};
