/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let map = {};

    wall.forEach(row => {
        let total = 0;
        row.forEach(num => {
            total += num;
            if (total in map) {
                map[total] += 1;
            } else {
                map[total] = 1;
            }
        });
    });

    let result = Object.keys(map).slice(0, -1).map(key => parseInt(key, 10)).reduce((acc, key) => {
        let tempResult = wall.length - map[key];
        return tempResult < acc ? tempResult : acc;
    }, Infinity);

    return result === Infinity ? wall.length : result;
};
