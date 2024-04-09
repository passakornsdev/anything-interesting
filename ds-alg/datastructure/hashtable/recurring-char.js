const findFirstRecurringChar = (input) => {
    if (!input?.length) {
        return;
    }
    const numberMapping = {};
    for (let item of input) {
        if (numberMapping[item]) {
            return item;
        } else {
            numberMapping[item] = true;
        }
    }
}

console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringChar([2, 3, 4, 5]));
