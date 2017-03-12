/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    const stack = [];
    let tempText = '';
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '(' || c === ')') {
            if (tempText) {
                let newNode = new TreeNode(parseInt(tempText, 10));
                tempText = '';
                if (stack.length > 0) {
                    let prevNodeStatus = stack[stack.length - 1];
                    if (prevNodeStatus.nextDirection) {
                        prevNodeStatus.node[prevNodeStatus.nextDirection] = newNode;
                        prevNodeStatus.nextDirection = prevNodeStatus.nextDirection === 'left' ? 'right' : null;
                    } else {
                        throw new error('Invalid String');
                    }
                }
                stack.push({
                    node: newNode,
                    nextDirection: 'left'
                });
            }
            if (c === ')') {
                stack.pop();
            }
        } else {
            tempText += c;
        }
    }
    if (tempText) {
        stack.push({
            node: new TreeNode(parseInt(tempText, 10))
        });
    }
    return stack.length <= 0 ? null : stack[0].node;
};
