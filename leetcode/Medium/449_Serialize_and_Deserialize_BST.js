/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = [];
    let queue = [];
    if (root) {
        queue = [root];
        while (queue.length) {
            let node = queue.shift();
            if (!node) {
                result.push(null);
            } else {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    let index = result.length - 1;
    while (result[index] === null) {
        index--;
    }
    return result.slice(0, index + 1).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let root = null;
    if (data) {
        let values = data.split(',').map(val => parseInt(val, 10));
        root = new TreeNode(values[0]);
        let queue = [root];
        values.slice(1).forEach((value, index) => {
            let node = queue[0];
            let newNode = null;
            if (!isNaN(value)) {
                newNode = new TreeNode(value);
                queue.push(newNode);
            }
            if (index % 2 === 1) {
                node.right = newNode;
                queue.shift();
            } else {
                node.left = newNode;
            }
        });
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
