// Time: O(n^2)
// Space: O(n)
const sameFrequentSquare = (rootArray, squareArray) => {
    let result = true;
    if (rootArray?.length !== squareArray?.length) {
        result = false;
    }
    rootArray.forEach((rootNum) => {
        let matchIndex = squareArray.indexOf(rootNum ** 2);
        if(matchIndex === -1) {
            result = false;
        }
        squareArray.splice(matchIndex, 1);
    });
    return result;
}

const input = Array(100000).fill(2);
const output = Array(100000).fill(4);

let result = sameFrequentSquare([2, 1, 2, 2, 3, 3], [1, 4, 4, 9, 9, 4]);
console.log(`sameFrequentSquare result: ${result}`);
console.time('sameFrequentSquare');
result = sameFrequentSquare(input, output);
console.timeEnd('sameFrequentSquare');
console.log(`sameFrequentSquare 1000 numbers result: ${result}`);
