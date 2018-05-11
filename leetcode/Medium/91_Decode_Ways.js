/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0 || parseInt(s, 10) === 0 || s[0] === '0') {
        return 0;
    }
    let result = {
        [s[0]]: 1
    };
    for (let i = 1; i < s.length; i++) {
        let localResult = {};
        let newChar = s[i];
        Object.keys(result).forEach(key => {
            if (newChar !== '0') {
                if (newChar in localResult) {
                    localResult[newChar] += result[key];
                } else {
                    localResult[newChar] = result[key];
                }
            }
            if (parseInt(`${key}${newChar}`, 10) < 27) {
                if (`${key}${newChar}` in localResult) {
                    localResult[`${key}${newChar}`] += result[key];
                } else {
                    localResult[`${key}${newChar}`] = result[key];
                }
            }
        });
        result = localResult;
    }
    return Object.keys(result).reduce((acc, key) => acc + result[key], 0);
};
