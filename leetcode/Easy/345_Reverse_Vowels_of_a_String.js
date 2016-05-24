/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u'],
        indexes = [],
        vowelsInStr = [],
        splitedStr = s.split('');

    splitedStr.forEach(function(c, i) {
        if (vowels.indexOf(c.toLowerCase()) >= 0) {
            indexes.push(i);
            vowelsInStr.push(c);
        }
    });

    vowelsInStr.forEach(function(v, i) {
        splitedStr.splice(indexes[indexes.length - 1 - i], 1, v);
    });

    return splitedStr.join('');
};
