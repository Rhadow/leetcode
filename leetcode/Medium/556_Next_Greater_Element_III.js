
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let str = n.toString(10);
    let result = -1;
    let breakIndex = null;
    let smallIndex = null;
    for (let i = str.length - 1; i >= 1; i--) {
        let curNum = parseInt(str[i], 10);
        let prevNum = parseInt(str[i - 1], 10);
        if (curNum > prevNum) {
            breakIndex = i - 1;
            break;
        }
    }
    for (let i = str.length - 1; i > breakIndex; i--) {
        let targetNum = parseInt(str[breakIndex], 10);
        let curNum = parseInt(str[i], 10);
        if (curNum > targetNum) {
            smallIndex = i;
            break;
        }
    }
    if (breakIndex !== null && breakIndex >= 0 && smallIndex !== null) {
        let chars = str.split('');
        let temp = chars[smallIndex];
        chars[smallIndex] = chars[breakIndex];
        chars[breakIndex] = temp;
        chars = chars.slice(0, breakIndex + 1).concat(chars.slice(breakIndex + 1).reverse()).join('');
        result = parseInt(chars, 10);
    }
    return result > 2147483647 ? -1 : result;
};
