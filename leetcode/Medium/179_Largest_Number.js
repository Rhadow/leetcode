/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let sorted = nums.map(num => num.toString(10)).sort((a, b) => {
        let pre = a + b;
        let post = b + a;
        let index = 0;
        while (index < pre.length - 1) {
            if (parseInt(pre[index], 10) > parseInt(post[index], 10)) {
                return -1;
            } else if (parseInt(pre[index], 10) < parseInt(post[index], 10)) {
                return 1;
            }
            index++;
        }
        return 0;
    });
    let result = sorted.join('');
    return result[0] === '0' ? '0' : result;
};
