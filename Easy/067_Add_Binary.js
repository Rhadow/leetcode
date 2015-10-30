/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var longer = a.length > b.length ? a : b;
    var shorter = a === longer ? b : a;
    var result = '';
    var carry = 0;
    var temp;

    while (shorter.length < longer.length) {
        shorter = '0' + shorter;
    }

    for (var i = longer.length - 1; i >= 0; i--) {
        temp = parseInt(shorter[i]) + parseInt(longer[i]) + carry;
        if (temp > 1) {
            carry = 1;
            temp = temp % 2;
        } else {
            carry = 0;
        }
        result = temp + result;
    }

    if (carry) {
        result = carry + result;
    }

    return result;
};
