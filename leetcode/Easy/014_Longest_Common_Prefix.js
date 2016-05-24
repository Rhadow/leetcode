/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    return strs.reduce(function(acc, next) {
        var temp = acc.split('');
        var result = '';

        for (var i = 0; i < temp.length; i++) {
            if (temp[i] !== next[i]) {
                break;
            }
            result += temp[i];
        }

        return result;
    });
};
