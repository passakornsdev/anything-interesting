// Time: O(Log(n))
const searchIndexOpt = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2);
        let middleVal = arr[middleIndex];

        if (middleVal < val) {
            min = middleIndex + 1;
        } else if(middleVal > val) {
            max = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
    return -1;
};

console.log(searchIndexOpt([1, 2, 3, 4, 5, 6], 5));
console.log(searchIndexOpt([1, 2, 3, 4, 5, 6], 11));
