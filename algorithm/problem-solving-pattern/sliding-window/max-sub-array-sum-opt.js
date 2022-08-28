// O(n)
const maxSubArraySumOpt = (arr, num) => {
    if (num > arr.length) {
        return null;
    }
    let max = 0;
    let temp;
    for (let i = 0;i < num; i++) {
        max += arr[i];
    }
    temp = max;
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }
    return max;
};

console.log(maxSubArraySumOpt([6, 2, 9, 2, 1, 8, 5, 6, 3], 3));

