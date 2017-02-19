/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allCapitals = word.split('').every(char => caps.indexOf(char) >= 0);
    const firstCharCapital = (caps.indexOf(word[0]) >= 0) && word.split('').slice(1).every(char => caps.indexOf(char) < 0);
    const allSmall = word.split('').every(char => caps.indexOf(char) < 0);
    return allCapitals || firstCharCapital || allSmall;
};
