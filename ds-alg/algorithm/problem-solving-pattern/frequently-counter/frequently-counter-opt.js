// Time: O(3n) = O(n)
// Space: O(n)
const sameFrequentSquareOpt = (rootArray, squareArray) => {
    let result = true;
    if (rootArray?.length !== squareArray?.length) {
        result = false;
    }
    const rootObject = {};
    const squareObject = {};
    rootArray.forEach(num => rootObject[num] = (rootObject[num] || 0) + 1);
    squareArray.forEach(num => squareObject[num] = (squareObject[num] || 0) + 1);
    for(let key in rootObject) {
        if (squareObject[key ** 2] !== rootObject[key]) {
            result = false;
        }
    }
    return result;
}

const input = Array(100000).fill(2);
const output = Array(100000).fill(4);

let result = sameFrequentSquareOpt([2, 1, 2, 2, 3, 3], [1, 4, 4, 9, 9, 4]);
console.log(`sameFrequentSquare result: ${result}`);
console.time('sameFrequentSquare');
result = sameFrequentSquareOpt(input, output);
console.timeEnd('sameFrequentSquare');
console.log(`sameFrequentSquare 1000 numbers result: ${result}`);
