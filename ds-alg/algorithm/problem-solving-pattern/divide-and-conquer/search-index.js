// Time: O(n)
// Space: O(1)
const searchIndex = (arr, val) => {
    for (const i of arr) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};

console.log(searchIndex([1, 2, 3, 4, 5, 6], 5));
console.log(searchIndex([1, 2, 3, 4, 5, 6], 11));
