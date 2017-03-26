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
var boundaryOfBinaryTree = function(root) {
    if (!root) {
        return [];
    }
    let leftPath = [];
    let rightPath = [];
    let children = findChildren(root);
    if (root.left) {
        leftPath = findLeftMostPath(root.left);
    }
    if (root.right) {
        rightPath = findRightMostPath(root.right);
    }
    if (leftPath.length === 0) {
        return [root.val, ...children.slice(0, -1), ...rightPath.reverse()];
    }
    if (rightPath.length === 0) {
        return [root.val, ...leftPath, ...children.slice(1)];
    }
    return [root.val, ...leftPath, ...children.slice(1, -1), ...rightPath.reverse()];
};

function findLeftMostPath(root) {
    let result = [root.val];
    if (root.left) {
        return result.concat(findLeftMostPath(root.left));
    }
    if (root.right) {
        return result.concat(findLeftMostPath(root.right));
    }
    return result;
}

function findRightMostPath(root) {
    let result = [root.val];
    if (root.right) {
        return result.concat(findRightMostPath(root.right));
    }
    if (root.left) {
        return result.concat(findRightMostPath(root.left));
    }
    return result;
}

function findChildren(root) {
    let leftChildren = [];
    let rightChildren = [];
    if (!root.left && !root.right) {
        return [root.val];
    }
    if (root.left) {
        leftChildren = findChildren(root.left);
    }
    if (root.right) {
        rightChildren = findChildren(root.right);
    }
    return leftChildren.concat(rightChildren);
}
