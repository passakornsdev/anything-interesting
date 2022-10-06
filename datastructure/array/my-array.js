class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shriftItems(index);
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    shriftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
}

const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.push('!'));
console.log(newArray.delete(1));
console.log(newArray);
console.log(newArray.get(0));
