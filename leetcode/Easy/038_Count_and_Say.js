/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var result = '1',
        index = 1,
        left, right, temp, tempResult;

    while (index < n) {
        left = 0;
        right = 0;
        tempResult = '';

        while (right <= result.length - 1) {
            if (result[right] !== result[right + 1]) {
                temp = result.substring(left, right + 1);
                tempResult += temp.length + temp[0];
                left = right + 1;
            }
            right++;
        }
        result = tempResult;
        index++;
    }

    return result;
};
