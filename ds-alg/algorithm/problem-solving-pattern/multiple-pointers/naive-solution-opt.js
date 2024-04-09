// time O(n)
// space O(1)
// input sorted array, from negative integer to positive integer
const sumZeroOpt = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        // means positive number is greater than negative number
        else if (sum > 0) {
            right--;
        }
        // means negative number is greater than positive number
        else {
            left++;
        }
    }
}

console.log(sumZeroOpt([-4, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroOpt([-4, -2, -1, 0, 5, 6]));
