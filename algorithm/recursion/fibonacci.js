// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(N)
function fibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1]);
    }
    return arr[n];
}

console.log(fibonacciIterative(3));

// O(2^N), every additional element, we get increase of function calls
function fibonacciRecursive(n) {
    if (n < 2){
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
}

console.log(fibonacciRecursive(50));

// Fib Recursive tree
//                               Fib(5)
//                       Fib(4)            Fib(3)
//                  Fib(3)    Fib(2)    Fib(2)  Fib(1)
//              Fib(2) Fib(1)
