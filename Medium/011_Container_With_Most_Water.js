/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0,
        left = 0,
        right = height.length - 1,
        localMin;

    while (left < right) {
        localMin = height[left] > height[right] ? height[right] : height[left];
        if (localMin * (right - left) > max) {
            max = localMin * (right - left);
        }
        if (localMin === height[left]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
