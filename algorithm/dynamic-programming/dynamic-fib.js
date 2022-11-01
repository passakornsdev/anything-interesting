// Time: O(2^n)
let calculationCount = 0;
function fibonacci(n) {
    calculationCount++;
    if (n < 2) {
        return n;
    }
    // this repeats calculation a lot
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('trad fib', fibonacci(40));
console.log('trad fib ops count', calculationCount);

let masterCalculationCount = 0;
// Time: O(N)
function fibMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            masterCalculationCount++;
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

// bottom up approach
function fibMaster2(n) {
    let answer = [0, 1]; // prefill bottom answer
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}

const fastFib = fibMaster();
console.log('fast fib', fastFib(40));
console.log('fast fib ops count', masterCalculationCount);
console.log('bottom up fib', fibMaster2(40));
