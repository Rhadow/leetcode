let inversions = function(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));

    let leftInversions = inversions(left);
    let rightInversions = inversions(right);
    let crossInversions = 0;

    let leftSorted = left.slice(0).sort((a, b) => {
        return a - b;
    });
    let rightSorted = right.slice(0).sort((a, b) => {
        return a - b;
    });

    let i = 0;
    let j = 0;

    for (var k = 0; k < leftSorted.length + rightSorted.length; k++) {
        if (leftSorted[i] < rightSorted[j] || rightSorted[j] === undefined) {
            i++;
        } else {
            crossInversions += leftSorted.slice(i).length;
            j++;
        }
    }

    return leftInversions + rightInversions + crossInversions;
};
