const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (array[j] < array[j - 1]) {
                const temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            } else {
                break;
            }
        }
    }
    return array;
}

insertionSort(numbers);
console.log(numbers);
