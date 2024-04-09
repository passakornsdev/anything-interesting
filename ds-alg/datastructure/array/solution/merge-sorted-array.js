const input1 = [0,3,4,31];
const input2 = [2,4,6,30];

const mergeSortedArray = (arr1, arr2) => {
    const arrayGroup = {};
    const mergedArray = [...arr1, ...arr2];
    for (let index = 0; index < mergedArray.length; index++) {
        const indexValue = mergedArray[index];
        if (!arrayGroup[indexValue]) {
            arrayGroup[indexValue] = [];
        }
        arrayGroup[indexValue].push(indexValue);
    }
    return Object.values(arrayGroup).flatMap(s => [...s]);
};

const mergedSortedArray2 = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a < b ? -1 : 1);

function mergeSortedArrayAnswer(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let firstArrayIndex = 0;
    let secondArrayIndex = 0;

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            firstArrayIndex++;
            array1Item = arr1[firstArrayIndex];
        } else {
            mergedArray.push(array2Item);
            secondArrayIndex++;
            array2Item = arr2[secondArrayIndex];
        }
    }
    return mergedArray;
}

console.log(mergeSortedArray(input1, input2).join(','));
console.log(mergedSortedArray2(input1, input2).join(','));
console.log(mergeSortedArrayAnswer(input1, input2).join(','));

console.log(mergeSortedArray(input1, []).join(','));
console.log(mergedSortedArray2(input1, []).join(','));
console.log(mergeSortedArrayAnswer(input1, []).join(','));

