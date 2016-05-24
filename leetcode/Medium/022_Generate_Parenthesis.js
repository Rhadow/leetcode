/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    function generate(left, right, current, result) {
        if (left === n && right === n) {
            result.push(current);
            return;
        }
        if (left < right) {
            return;
        }
        if (left === n) {
            return generate(left, right + 1, current + ')', result);
        }
        generate(left + 1, right, current + '(', result);
        generate(left, right + 1, current + ')', result);
    }

    generate(0, 0, '', res);

    return res;
};
