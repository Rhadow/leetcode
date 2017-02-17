/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const totalNums = [1];
    let index = 1;
    let result = '';
    while (index <= n) {
        totalNums[index] = totalNums[totalNums.length - 1] * index;
        index += 1;
    }
    index = n;
    while (index > 1) {
        const seqInOneSection = totalNums[index] / index;
        const sectionKIsIn = Math.ceil(k / seqInOneSection);
        result += nums[sectionKIsIn];
        nums.splice(sectionKIsIn, 1);
        k = (k % seqInOneSection === 0) ? (k / sectionKIsIn) : k % seqInOneSection;
        index -= 1;
    }
    return result + nums[1];
};
