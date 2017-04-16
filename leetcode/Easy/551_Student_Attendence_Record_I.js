/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let aCount = 0;
    let hasTwoMoreL = false;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === 'L' && s[i - 1] === 'L' && s[i + 1] === 'L') {
            hasTwoMoreL = true;
        }
        if (s[i] === 'A') {
            aCount += 1;
        }
    }
    aCount = s[0] === 'A' ? aCount + 1 : aCount;

    return !(aCount >= 2 || hasTwoMoreL);
};
