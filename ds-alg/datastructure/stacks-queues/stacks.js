class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        return this;
    }

    peek() {
        return this.top?.value;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return newNode.value;
    }

    pop() {
        let topStack;
        if (this.top) {
            topStack = this.top;
            this.top = topStack.next;
            this.length--;
        }
        if (!this.top) {
            this.bottom = null;
        }
        return topStack?.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
console.log(myStack.isEmpty());
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
