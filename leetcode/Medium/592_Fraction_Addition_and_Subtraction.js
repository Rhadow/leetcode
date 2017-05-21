/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    const opsMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };
    const [denoms, nums, ops] = parse(expression);
    const base = denoms.reduce((res, num) => res * num, 1);
    const scaledNums = nums.map((num, i) => num * (base / [denoms[i]]));
    let result = scaledNums[0];
    for (let i = 1; i < scaledNums.length; i++) {
        result = opsMap[ops[i - 1]](result, scaledNums[i]);
    }
    const isNegative = result < 0;
    result = Math.abs(result);
    const gcd = findGCD(result, base);
    return `${isNegative ? '-' : ''}${result / gcd}/${base / gcd}`;
};

function parse(str) {
    const denoms = [];
    const nums = [];
    const ops = [];
    let currentNum = '';
    str.split('').forEach(c => {
        if (c === '+' || c === '-') {
            if (currentNum) {
                denoms.push(+currentNum);
                currentNum = '';
            } else {
                nums.push(0);
                denoms.push(1);
            }
            ops.push(c);
        } else if (c === '/') {
            nums.push(+currentNum);
            currentNum = '';
        } else {
            currentNum += c;
        }
    });
    denoms.push(+currentNum);
    return [denoms, nums, ops];
}

function findGCD(a, b) {
    while (b !== 0) {
        let t = a % b;
        a = b;
        b = t;
    }
    return a;
}
