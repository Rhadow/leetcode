/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = +Math.abs(x).toString().split('').reverse().join('');
    return num > 2147483647 ? 0 : x < 0 ? -num : num;
};
