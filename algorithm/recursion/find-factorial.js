// Factorial is given number and multiply by minus one value until it reaches number one
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function findFactorialRecursive(number) {
    if (number <= 2) {
        return number;
    }
    // O(n), call recursive function according to input length
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterate(number) {
    if (number <= 1) {
        return number;
    }
    let factorial = 1;
    // O(n)
    for (let i = 2; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(findFactorialIterate(5));
console.log(findFactorialRecursive(5));
