/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const hash = {};
    let result = 0;
    if (k < 0) {
        return result;
    }
    if (k === 0) {
        return findDuplicate(nums);
    }
    let dedupedNum = dedupe(nums);
    dedupedNum.forEach(num => {
        hash[num + k] = true;
    });
    dedupedNum.forEach(num => {
        if (num in hash) {
            result += 1;
        }
    });
    return result;
};

function dedupe(nums) {
    let result = [];
    nums.forEach(n => {
        if (result.indexOf(n) === -1) {
            result.push(n);
        }
    });
    return result;
}

function findDuplicate(nums) {
    let result = 0;
    let hash = {};
    nums.forEach(n => {
        if (n in hash) {
            hash[n] += 1;
        } else {
            hash[n] = 1;
        }
    });
    Object.keys(hash).forEach(key => {
        if (hash[key] >= 2) {
            result += 1;
        }
    });
    return result;
}
