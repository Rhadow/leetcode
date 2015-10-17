/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var globalMax = height[0];
    var maxIndex = 0;
    var left = [];
    var right = [];

    function collectWater(subHeight) {
        var max = 0;
        var subResult = 0;
        for (var i = 0; i < subHeight.length; i++) {
            if (subHeight[i] < max) {
                subResult += max - subHeight[i];
            }
            if (subHeight[i] > max) {
                max = subHeight[i];
            }
        }
        return subResult;
    }

    for (var i = 0; i < height.length; i++) {
        if (height[i] > globalMax) {
            maxIndex = i;
            globalMax = height[i];
        }
    }
    left = height.slice(0, maxIndex + 1);
    right = height.slice(maxIndex).reverse();

    return collectWater(left) + collectWater(right);
};
