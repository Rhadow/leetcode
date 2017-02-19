/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    let options = [];
    let result = [];
    for (let i = 1; i <= N; i++) {
        let temp = [];
        for (let j = 1; j <= N; j++) {
            if (i % j === 0 || j % i === 0) {
                temp.push(j);
            }
        }
        options.push(temp);
    }

    return findSolutons(options).length;
};

function findSolutons(options) {
    if (options.length === 1) {
        return options[0].map(n => [n]);
    }
    let result = [];
    let subSolutions = findSolutons(options.slice(1));

    options[0].forEach(num => {
        subSolutions.forEach(subSolution => {
            if (subSolution.indexOf(num) < 0) {
                result.push([num].concat(subSolution));
            }
        });
    });
    return result;
}
