/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    const rootValue = preorder[0];
    const rootValueIndex = inorder.indexOf(rootValue);
    const root = new TreeNode(rootValue);
    const leftPreorder = preorder.slice(1, 1 + rootValueIndex);
    const leftInorder = inorder.slice(0, rootValueIndex);
    const rightPreorder = preorder.slice(rootValueIndex + 1);
    const rightInorder = inorder.slice(rootValueIndex + 1);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};
