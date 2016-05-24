/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var legalActions = ['+', '-', '(', ')'],
        nums = [],
        actions = [],
        num1, num2, action1,
        items = [], temp = '';

    for (var i = 0; i < s.length; i++) {
        if (legalActions.indexOf(s[i]) >= 0) {
            if (temp) {
                items.push(+temp);
            }
            items.push(s[i]);
            temp = '';
        } else if (s[i] !== ' ') {
            temp += s[i];
        }
    }

    if (temp) {
        items.push(temp);
    }

    items.forEach(function(item) {
        if (legalActions.indexOf(item) < 0) {
            nums.push(+item);
            if (nums.length > 1 && (actions[actions.length - 1] === '+' || actions[actions.length - 1] === '-')) {
                num1 = nums.pop();
                num2 = nums.pop();
                action1 = actions.pop();
                nums.push(action1 === '+' ? (num2 + num1) : (num2 - num1));
            }
        } else {
            actions.push(item);
            if (actions[actions.length - 1] === ')') {
                actions.pop();
                actions.pop();
                if (nums.length > 1 && (actions[actions.length - 1] === '+' || actions[actions.length - 1] === '-')) {
                    num1 = nums.pop();
                    num2 = nums.pop();
                    action1 = actions.pop();
                    nums.push(action1 === '+' ? (num2 + num1) : (num2 - num1));
                }
            }
        }
    });
    return nums[0];
};
