/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    if (!root.left && !root.right) {
        root.next = root.next ? root.next : null;
        return;
    }
    if (!root.next) {
        root.next = null;
    }
    root.left.next = root.right;
    root.right.next = null;
    if (root.next) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
};
