/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.trim().split(' ');
    return !s ? 0 : words[words.length - 1].split('').length;
};
