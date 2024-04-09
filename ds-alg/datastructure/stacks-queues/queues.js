class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first?.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return newNode.value;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        const firstNode = this.first;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        this.length--;
        return firstNode?.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.isEmpty());
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
