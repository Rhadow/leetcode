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


// Second Solution


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
    var result = [], temp = [root];

    while (root && temp.length > 0) {
        result.push(temp.map(function(node) { return node.val; }));
        temp = temp.reduce(function(acc, nextNode) {
            return acc.concat(nextNode.left ? [nextNode.left] : []).concat(nextNode.right ? [nextNode.right] : []);
        }, []);
    }

    return result;
};
