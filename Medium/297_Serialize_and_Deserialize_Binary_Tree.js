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
    var result = [];
    var stack = [root];
    var node;

    if (!root) {
        return [];
    }
    while (stack.length) {
        node = stack.shift();
        if (node) {
            result.push(node.val);
            node.left ? stack.push(node.left) : stack.push(null);
            node.right ? stack.push(node.right) : stack.push(null);
        } else if (stack.length && !node) {
            result.push(null);
        }
    }
    if (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) {
        return null;
    }
    var root = new TreeNode(data[0]);
    var parentStack = [root];
    var node, parent
    var isLeft = true;

    for (var i = 1; i < data.length; i++) {
        parent = parentStack[0];
        if (data[i] !== null) {
            node = new TreeNode(data[i]);
            parentStack.push(node);
        } else {
            node = null;
        }
        if (isLeft) {
            parent.left = node;
            isLeft = false;
        } else {
            parent.right = node;
            isLeft = true;
            parentStack.shift();
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */