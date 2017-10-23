/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let top3 = [-Infinity, -Infinity, -Infinity];
    let bot2 = [Infinity, Infinity];
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n > top3[2]) {
            top3[0] = top3[1];
            top3[1] = top3[2];
            top3[2] = n;
        } else if (n > top3[1]) {
            top3[0] = top3[1];
            top3[1] = n;
        } else if (n > top3[0]) {
            top3[0] = n;
        }
        if (n < bot2[0]) {
            bot2[1] = bot2[0];
            bot2[0] = n;
        } else if (n < bot2[1]) {
            bot2[1] = n;
        }
    }
    return Math.max(top3[2] * bot2[0] * bot2[1], top3[2] * top3[1] * top3[0]);
};
