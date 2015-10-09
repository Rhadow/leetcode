/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var splittedStr = str.split(' ');
    var splittedPattern = pattern.split('');
    var hash = {};

    if (splittedStr.length !== splittedPattern.length) {
        return false;
    }

    return splittedPattern.map(function(v, i, a) {
        if (!hash[v]) {
            for (var key in hash) {
                if (hash[key] === splittedStr[i]) {
                    return false;
                }
            }
            hash[v] = splittedStr[i];
            return true;
        }
        return hash[v] === splittedStr[i];
    }).every(function(v) {
        return v;
    });
};
