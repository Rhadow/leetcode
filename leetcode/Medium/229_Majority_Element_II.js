/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // Boyer–Moore majority vote algorithm
    let [m1, m2] = [null, null];
    let [c1, c2] = [0,0];
    let limit = Math.floor(nums.length / 3);
    nums.forEach(num => {
        if (num === m1) {
            c1 += 1;
        } else if (num === m2) {
            c2 += 1;
        } else if (c1 === 0) {
            m1 = num;
            c1 = 1;
        } else if (c2 === 0) {
            m2 = num;
            c2 = 1;
        } else {
            c1 -= 1;
            c2 -= 1;
        }
    });
    c1 = 0;
    c2 = 0;
    nums.forEach(num => {
        if (num === m1) {
            c1 += 1;
        }
        if (num === m2) {
            c2 += 1;
        }
    });
    let result = [];
    if (c1 > limit) {
        result.push(m1);
    }
    if (c2 > limit) {
        result.push(m2);
    }
    return result;
};
