/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1Arr = version1.split('.');
    var v2Arr = version2.split('.');
    var longerLength = v1Arr.length > v2Arr.length ? v1Arr.length : v2Arr.length;

    for (var i = 0; i < longerLength; i++) {
        var v1 = i >= v1Arr.length ? 0 : +v1Arr[i];
        var v2 = i >= v2Arr.length ? 0 : +v2Arr[i];
        if (v1 > v2) {
            return 1;
        } else if (v2 > v1) {
            return -1;
        }
    }
    return 0;
};
