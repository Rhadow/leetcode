/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var map = {};
    var result = [];

    for (var i = 0; i <= s.length - 10; i++) {
        var key = s.substr(i, 10);
        if (key in map) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    }

    for (var k in map) {
        if (map[k] > 1) {
            result.push(k);
        }
    }

    return result;
};
