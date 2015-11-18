/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [];
    var numMap = {
        '1': ['*'],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    var digitsArray = digits.split('');
    var combos;

    if (digits.length === 0) {
        return [];
    }
    for (var i = 0; i < digitsArray.length; i++) {
        if (!(digitsArray[i] in numMap)) {
            return [];
        }
    }
    if (digits.length === 1) {
        return numMap[digits[0]];
    }
    combos = letterCombinations(digits.slice(1));
    numMap[digits[0]].forEach(function(c) {
        var temp = combos.map(function(combo) {
            return c + combo;
        });
        result = result.concat(temp);
    });

    return result;
};