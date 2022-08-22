// T: O(n), S O(1)
const fibonacci = (desiredPos) => {
    if (desiredPos === 0) {
        return 0;
    }
    let previousFib = 0;
    let currentFib = 1;
    for (let i = 1; i < desiredPos; i++) {
        const nextFib = currentFib + previousFib;
        previousFib = currentFib;
        currentFib = nextFib;
    }
    return currentFib;
};

// T: O(n), S: O(n), suite for JS which has event loop arch
const fibonacciRecursive = (desiredPos, currentFib = 1, previousFib = 0) => {
    if (desiredPos === 0) {
        return 0;
    }
    desiredPos -= 1;
    const nextFix = currentFib + previousFib;
    return desiredPos === 0 ? currentFib : fibonacciRecursive(desiredPos, nextFix, currentFib);
};

const main = () => {
    const args = process.argv.slice(2);
    if (!args || !args[0] || !(+args[0])) {
        console.log('please specify number of finding position of fibonacci via first argument');
        return;
    }
    console.time('fibonacci v1');
    console.log(`Result of ${args[0]} fibonacci position is ${fibonacci(args[0])}`);
    console.timeEnd('fibonacci v1');
    console.time('fibonacci v2');
    console.log(`Result of ${args[0]} fibonacci position is ${fibonacciRecursive(args[0])}`);
    console.timeEnd('fibonacci v2');
}

main();
