/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    s.split('').forEach(function(v) {
        var top = stack[stack.length - 1];
        if (top === '(' && v === ')' || top === '{' && v === '}' || top === '[' && v === ']') {
            stack.pop();
        } else {
            stack.push(v);
        }
    });

    return stack.length === 0;
};
