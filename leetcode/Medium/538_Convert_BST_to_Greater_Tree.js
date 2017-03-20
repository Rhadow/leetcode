/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if (!root) {
        return null;
    }
    root.val = root.val + sum(root.right);
    root.right = convertBST(root.right);
    root.left = convertBST(root.left);
    add(root.left, root.val);
    return root;
};

function sum(root) {
    if (!root) {
        return 0;
    }
    return root.val + sum(root.left) + sum(root.right);
}

function add(root, val) {
    if (!root) {
        return null;
    }
    root.val = root.val + val;
    add(root.left, val);
    add(root.right, val);
    return root;
}
