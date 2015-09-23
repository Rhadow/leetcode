/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var r = s.toLowerCase().split('').filter(function(c) { return /^[a-zA-Z0-9]$/.test(c); });
    return r.join('') === r.reverse().join('');
};
