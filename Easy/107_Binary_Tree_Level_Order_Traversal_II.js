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
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [[root.val]];
    }

    var result = [];
    var leftTrees = levelOrderBottom(root.left).reverse();
    var rightTrees = levelOrderBottom(root.right).reverse();
    var longer = leftTrees.length > rightTrees.length ? leftTrees : rightTrees;

    longer.forEach(function(v, i) {
        if (leftTrees[i] && rightTrees[i]) {
            result.push(leftTrees[i].concat(rightTrees[i]));
        } else if (leftTrees[i] && !rightTrees[i]){
            result.push(leftTrees[i]);
        } else {
            result.push(rightTrees[i]);
        }
    });

    return result.reverse().concat([[root.val]]);
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
var levelOrderBottom = function(root) {
    var result = [], temp = [root];

    while (root && temp.length > 0) {
        result.unshift(temp.map(function(node) { return node.val; }));
        temp = temp.reduce(function(acc, nextNode) {
            return acc.concat(nextNode.left ? [nextNode.left] : []).concat(nextNode.right ? [nextNode.right] : []);
        }, []);
    }

    return result;
}; 
