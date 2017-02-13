/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return '0';
    }

    let result = '';
    let isNegative = num < 0;
    num = isNegative ? -num : num;

    while (num > 0) {
        result = ('' + num % 7) + result;
        num = Math.floor(num / 7);
    }

    return isNegative ? `-${result}` : result;
};
