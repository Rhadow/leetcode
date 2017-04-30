/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const allValues = [];
    const result = [];
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            allValues.push(nums[i][j]);
        }
    }
    if (r * c > allValues.length) {
        return nums;
    }
    for (let i = 0; i < r; i++) {
        result[i] = [];
        for (let j = 0; j < c; j++) {
            result[i][j] = allValues[index];
            index += 1;
        }
    }
    return result;
};
