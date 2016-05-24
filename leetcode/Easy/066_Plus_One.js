/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var currentIndex = digits.length - 1;
    var n = digits[currentIndex];

    digits[currentIndex] = n + 1;
    while (n + 1 >= 10) {
        digits[currentIndex] = 0;
        currentIndex--;

        if (currentIndex < 0) {
            digits.unshift(1);
            break;
        } else {
            n = digits[currentIndex];
            digits[currentIndex]++;
        }
    }
    return digits;
};
