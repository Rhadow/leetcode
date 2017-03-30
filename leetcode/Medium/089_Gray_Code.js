/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let upperLimit = Math.pow(2, n);
    let result = [0];
    for (let i = 1; i < upperLimit; i++) {
        let lastResult = result[result.length - 1];
        if (i % 2 === 1) {
            result.push(lastResult ^ 1);
        } else {
            let mask = 1 << ((Math.log(lastResult & -lastResult) / Math.log(2)) + 1);
            result.push(lastResult ^ mask);
        }
    }
    return result;
};
