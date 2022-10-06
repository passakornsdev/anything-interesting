const input = 'HI I AM JO FROM SOMEWHERE';

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'please input solution';
    }

    const backward = [];
    const totalChar = str.length - 1;

    for (let index = totalChar; index >= 0; index--) {
        backward.push(str[index]);
    }

    return backward.join('');
}

// use built-in method to avoid lots of logic
const reverse2 = (str) => str.split('').reverse().join('');


const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse(input));
console.log(reverse2(input));
console.log(reverse3(input));
