// O(3n) = O(n)
const validAnagram = (firstString, secondString) => {
    if ((!firstString && firstString !== '') && (!secondString && secondString !== '')) {
        return false;
    }
    if (firstString.length !== secondString.length) {
        return false;
    }
    if (firstString === secondString) {
        return true;
    }

    const lookUp = {};
    // O(n)
    firstString = firstString.toLowerCase();
    // O(n)
    for (let char of firstString) {
        lookUp[char] = (lookUp[char] || 0) + 1;
    }
    // O(n)
    for (const checkChar of secondString) {
        if (!lookUp[checkChar]) {
            return false;
        } else {
            lookUp[checkChar] -= 1;
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
