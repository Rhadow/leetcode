/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
    let distance = 0;
    let result = Infinity;
    nuts.forEach(nut => {
        const x = Math.abs(nut[0] - tree[0]);
        const y = Math.abs(nut[1] - tree[1]);
        distance += (2 * (x + y));
    });
    nuts.forEach(nut => {
        const x = Math.abs(nut[0] - squirrel[0]);
        const y = Math.abs(nut[1] - squirrel[1]);
        let temp = distance + x + y - Math.abs(nut[0] - tree[0]) - Math.abs(nut[1] - tree[1]);
        if (temp < result) {
            result = temp;
        }
    });
    return result;
};
