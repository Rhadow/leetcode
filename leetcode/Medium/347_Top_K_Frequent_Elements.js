/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {}, freqList = [], result = [];
    nums.forEach(function(n) {
        if (n in map) {
            map[n] += 1;
        } else {
            map[n] = 1;
        }
    });
    for (var i in map) {
        var count = map[i];
        if (freqList[count]) {
            freqList[count].push(+i);
        } else {
            freqList[count] = [+i];
        }
    }
    freqList = freqList.filter(function(item) { return item; });
    for (var j = freqList.length - 1; j >= 0; j--) {
        result = result.concat(freqList[j]);
        if (result.length >= k) {
            break;
        }
    }
    return result.slice(0, k);
};
