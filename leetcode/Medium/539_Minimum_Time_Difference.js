/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const minutePoints = timePoints.map(str => {
        let [hour, minute] = str.split(':');
        return parseInt(hour, 10) * 60 + parseInt(minute, 10)
    });
    let result = Infinity;
    let sortedMinutes = minutePoints.slice(0).sort((a, b) => a - b);
    for (let i = 1; i < sortedMinutes.length; i++) {
        if (sortedMinutes[i] - sortedMinutes[i - 1] < result) {
            result = sortedMinutes[i] - sortedMinutes[i - 1];
        }
    }
    let headTailDiff = Math.abs(sortedMinutes[0] + 1440 - sortedMinutes[sortedMinutes.length - 1]);
    return result > headTailDiff ? headTailDiff : result;
};
