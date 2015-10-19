/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [[root.val]];
    }

    var result = [[]];
    var right = levelOrder(root.right);
    var left = levelOrder(root.left);
    var longer = right.length > left.length ? right : left;
    var shorter = longer === right ? left : right;

    result.push([root.val]);
    longer.forEach(function(v, i) {
        var subResult = shorter[i] ? longer === right ? shorter[i].concat(v) : v.concat(shorter[i]) : v;
        result.push(subResult);
    });

    return result.filter(function(v) {
        return v.length !== 0;
    });
};
