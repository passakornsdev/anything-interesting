function addEighty(n) {
    console.log('long time');
    return n + 80;
}

console.log(addEighty(10));
console.log(addEighty(10));

// let cache = {};

const memoizedAddEighty = () => {
    let cache = {};
    return (n) => {
        // JS Closure, avoid global scope
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80
            return cache[n]
        }
    }
}
const memoized = memoizedAddEighty();
console.log(memoized(5));
console.log(memoized(5));
