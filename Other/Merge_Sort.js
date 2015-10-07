let mergeSort = function(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    let sortedSubArr1 = mergeSort(arr.slice(0, arr.length / 2));
    let sortedSubArr2 = mergeSort(arr.slice(arr.length / 2));
    let subArr1Index = 0;
    let subArr2Index = 0;

    return arr.map(() => {
        let currentVal1 = sortedSubArr1[subArr1Index];
        let currentVal2 = sortedSubArr2[subArr2Index];

        if (currentVal1 === undefined || currentVal1 > currentVal2) {
            subArr2Index++;
            return currentVal2;
        }
        subArr1Index++;
        return currentVal1;
    });
};
