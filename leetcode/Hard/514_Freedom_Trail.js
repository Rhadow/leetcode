/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let dp = {0: 0};
    key.split('').forEach(char => {
        let temp = {};
        Object.keys(dp).forEach(index => {
            let tempIndex = +index;
            let tempStep = dp[index];
            while (ring[tempIndex] !== char) {
                tempIndex -= 1;
                if (tempIndex < 0) {
                    tempIndex = ring.length - (-tempIndex % ring.length);
                }
                tempStep = tempStep + 1;
            }
            if (tempIndex in temp) {
                temp[tempIndex] = temp[tempIndex] < tempStep ? temp[tempIndex] : tempStep;
            } else {
                temp[tempIndex] = tempStep;
            }

            tempStep = dp[index];
            tempIndex = +index;
            while (ring[tempIndex] !== char) {
                tempIndex = (tempIndex + 1) % ring.length;
                tempStep = tempStep + 1;
            }
            if (tempIndex in temp) {
                temp[tempIndex] = temp[tempIndex] < tempStep ? temp[tempIndex] : tempStep;
            } else {
                temp[tempIndex] = tempStep;
            }
        });
        dp = temp;
    });
    let smallestTurn = Infinity;
    for (let turn in dp) {
        smallestTurn = Math.min(smallestTurn, dp[turn]);
    }
    return smallestTurn + key.length;
};
