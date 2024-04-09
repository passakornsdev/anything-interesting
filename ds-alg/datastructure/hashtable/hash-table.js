class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        if (!this.data[address]) {
            return;
        }
        return this.data[address]
            .filter((data) => data[0] === key)
            .map(data => data[1])[0];
    }

    delete(key) {
        const address = this._hash(key);
        if (this.data[address]) {
            if (this.data[address].length === 1) {
                this.data[address] = undefined;
            } else {
                const index = this.data[address]
                    .flatMap(data => data[0])
                    .indexOf(key);
                this.data[address].splice(index, 1);
                return this.data[address];
            }
        }
        return undefined;
    }

    keys() {
        return this.data
            .flatMap(data => data)
            .flatMap(data => data[0]);
    }
}

const hashTable = new HashTable(50);
console.log(hashTable._hash('grapes'));
console.log(hashTable.set('grapes', 10000));
console.log(hashTable.get('grapes'));
console.log(hashTable.get('grapes2'));
console.log(hashTable.set('grapes2', 20000));
console.log(hashTable.get('grapes2'));
console.log(hashTable.set('apples', 20000));
console.log(hashTable.get('apples'));

console.log('keys');
console.log(hashTable.keys());

console.log('random delete');
console.log(hashTable.delete('asddsad'));

console.log('delete grapes 2');
console.log(hashTable.delete('grapes2'));
console.log(hashTable.get('grapes2'));

console.log('delete grapes');
console.log(hashTable.delete('grapes'));
console.log(hashTable.get('grapes'));
