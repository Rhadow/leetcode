/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var numsMap = {};
    var max = 1;
    var localMax, index, temp;

    nums.forEach(function(v, i) {
        numsMap[v] = i;
    });
    for (var i in numsMap) {
        localMax = 1;
        temp = +i;
        index = +i + 1;
        delete numsMap[i];
        while (index in numsMap) {
            localMax++;
            delete numsMap[index];
            index++;
        }
        index = temp - 1;
        while (index in numsMap) {
            localMax++;
            delete numsMap[index];
            index--;
        }
        max = localMax > max ? localMax : max;
    }

    return localMax > max ? localMax : max;
};
