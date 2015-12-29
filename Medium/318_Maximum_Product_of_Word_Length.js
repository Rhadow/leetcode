/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var result = 0;
    var temp;
    var numerized = [];
    function numerize(word) {
        var arr = [];
        for (var i = 0; i < 26; i++) {
            arr[i] = 0;
        }
        word.split('').forEach(function(c) {
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        });
        return parseInt(arr.join(''), 2);
    }

    for (var k = 0; k < words.length; k++) {
        numerized[k] = numerize(words[k]);
    }
    for (var i = 0; i < numerized.length; i++) {
        for (var j = i + 1; j < numerized.length; j++) {
            if (!!!(numerized[i] & numerized[j])) {
                temp = words[i].length * words[j].length;
                result = temp > result ? temp : result;
            }
        }
    }

    return result;
};
