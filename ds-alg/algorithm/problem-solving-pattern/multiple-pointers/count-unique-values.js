// Function find total unique values which accepts sorted array
const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }
    let left = 0;
    let right = 1;
    const output = [arr[0]];
    // loop arr
    while(right < arr.length) {
        // if it's not same then move right pointer, add value to output
        if (arr[left] !== arr[right]) {
            output.push(arr[right]);
            left = right;
        }
        right++;
        // increase right pointer
    }
    return output.length;
};

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
