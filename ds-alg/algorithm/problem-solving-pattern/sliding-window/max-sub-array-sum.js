// O(n^2)
const maxSubArraySum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 2));

