/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var primeTruthTable = [];
    var result = 0;

    for (var i = 2; i < n; i++ ) {
        primeTruthTable[i] = true;
    }
    for (var i = 2; i * i < n; i++) {
        if (!primeTruthTable[i]) {
            continue;
        }
        for (var j = i * i; j < n; j += i) {
            primeTruthTable[j] = false;
        }
    }
    for (var i = 2; i < primeTruthTable.length; i++) {
        result += primeTruthTable[i] ? 1 : 0;
    }

    return result;
};
