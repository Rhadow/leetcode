/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    heaters = heaters.sort((a, b) => a - b);

    return houses.reduce((res, house) => {
        let nextHeaterIndex = binarySearchIndex(heaters, (heater) => heater >= house);
        let prevHeater = nextHeaterIndex === -1 ? heaters[heaters.length - 1] : nextHeaterIndex === 0 ? undefined: heaters[nextHeaterIndex - 1];
        let nextHeater = nextHeaterIndex === -1 ? undefined : heaters[nextHeaterIndex];
        let prevDist = prevHeater ? house - prevHeater : Number.MAX_VALUE;
        let nextDist = nextHeater ? nextHeater - house : Number.MAX_VALUE;
        return Math.max(Math.min(prevDist, nextDist), res);
    }, 0);
};

function binarySearchIndex(arr, cond) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let ans = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (cond(arr[mid])) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
