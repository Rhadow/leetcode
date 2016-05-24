/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var hash = {};

    for (var i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            for (var key in hash) {
                if (hash[key] === t[i]) {
                    return false;
                }
            }
            hash[s[i]] = t[i];
        } else {
            if (hash[s[i]] !== t[i]) {
                return false;
            }
        }
    }

    return true;
};
