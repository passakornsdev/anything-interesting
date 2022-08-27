// O(5n) = O(n)
const validAnagram = (firstString, secondString) => {
    // O(4)
    if ((!firstString && firstString !== '') && (!secondString && secondString !== '')) {
        return false;
    }
    // O(3)
    if (firstString.length !== secondString.length) {
        return false;
    }
    // O(1)
    if (firstString === secondString) {
        return true;
    }

    // O(1)
    const firstsFreqChar = {};
    // O(n)
    firstString = firstString.toLowerCase();
    // O(1)
    const secondFreqChar = {};
    // O(n)
    firstString = secondString.toLowerCase();
    // O(n)
    for (let char of firstString) {
        // O(5)
        firstsFreqChar[char] = (firstsFreqChar[char] || 0) + 1;
    }
    // O(n)
    for (let char of secondString) {
        // O(5)
        secondFreqChar[char] = (secondFreqChar[char] || 0) + 1;
    }
    // O(n)
    for (const key in firstsFreqChar) {
        // O(3)
        if (firstsFreqChar[key] !== secondFreqChar[key]) {
            return false;
        }
    }
    return true;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
