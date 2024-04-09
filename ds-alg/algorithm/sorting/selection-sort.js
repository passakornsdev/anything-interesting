const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i ++) {
        let lowestIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[lowestIndex] > array[j]) {
                lowestIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[lowestIndex];
        array[lowestIndex] = temp;
    }
    return array;
}

selectionSort(numbers);
console.log(numbers);
