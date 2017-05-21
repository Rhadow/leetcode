/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let result = 0;
    const map = {};
    nums.forEach(num => {
        if (num in map) {
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    });
    Object.keys(map).forEach(num => {
        let numInt = +num;
        let temp;
        if (map[numInt + 1]) {
            temp = map[num] + map[numInt + 1];
            result = result > temp ? result : temp;
        }
    });
    return result;
};
