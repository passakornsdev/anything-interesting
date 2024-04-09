class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (!!currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        const previousNode = this.traverse(index - 1);
        previousNode.next = new Node(value, previousNode.next);
        this.length++;
        return this;
    }

    lookup(index) {
        return this.traverse(index).value;
    }

    traverse(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (!!currentNode && currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        }
        if (currentNode) {
            return currentNode;
        }
        throw new Error('Linked list out of bound');
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
        }
        const previousNode = this.traverse(index - 1);
        if (index === this.length - 1) {
            previousNode.next = null;
            this.tail = previousNode;
        } else {
            previousNode.next = previousNode.next.next;
        }
        this.length--;
        return this;
    }

    reverse() {
        if (!this.head.next) {
            return this;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const tempNode = second.next;
            second.next = first;
            first = second;
            second = tempNode;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList
    .append(5)
    .prepend(1)
    .append(16)
    .append(11)
    .prepend(0)
    .printList());
console.log(myLinkedList.insert(2, 2).insert(3, 3).printList());
console.log(myLinkedList.lookup(2));
console.log(myLinkedList.lookup(3));
console.log(myLinkedList.remove(2).printList());
console.log(myLinkedList.remove(2).printList());
myLinkedList.remove(5)
console.log(myLinkedList.printList());
console.log(`reverse`);
console.log(myLinkedList.reverse().printList());

const linkedList2 = new LinkedList(1);
console.log(linkedList2.reverse().printList());
console.log(linkedList2.append(2).reverse().printList());
linkedList2.reverse();
console.log(linkedList2.append(3).reverse().printList());
linkedList2.reverse();
console.log(linkedList2.append(4).reverse().printList());
console.log(linkedList2.reverse().printList());
