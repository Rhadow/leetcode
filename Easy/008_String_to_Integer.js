/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var integer = /([+-]?\d*)/.exec(str.trim())[0];
    return isNaN(+integer) ? 0 : +integer > 2147483647 ? 2147483647 : +integer < -2147483648 ? -2147483648 : +integer;
};
