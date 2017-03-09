/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let result = [];
    ratings.forEach(rating => {
        result.push(1);
    });
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            result[i] = result[i - 1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && result[i] <= result[i + 1]) {
            result[i] = result[i + 1] + 1;
        }
    }
    return result.reduce((acc, next) => acc + next, 0)
};
