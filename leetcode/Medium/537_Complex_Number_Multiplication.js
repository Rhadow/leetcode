/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    let [aNum, aImgNum] = toComplexTuple(a);
    let [bNum, bImgNum] = toComplexTuple(b);
    let resultNum = aNum * bNum + -(aImgNum * bImgNum);
    let resultImg = aNum * bImgNum + bNum * aImgNum;

    return `${resultNum}+${resultImg}i`;
};

function toComplexTuple(str) {
    return str.split('+')
        .map((num, index) => index === 1 ? num.slice(0, -1) : num)
        .map(num => parseInt(num, 10));
}
