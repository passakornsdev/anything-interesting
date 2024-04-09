class Node {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value, this.tail);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, null, this.head);
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(!!currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        const previousNode = this.traverse(index - 1);
        const newNode = new Node(value, previousNode, previousNode.next);
        previousNode.next = newNode;
        if (newNode.next) {
            newNode.next.previous = newNode;
        }
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
        const previousNode = this.traverse(index - 1);
        if(previousNode.next && previousNode.next.next) {
            const followedDeleteNode = previousNode.next.next;
            if (followedDeleteNode) {
                followedDeleteNode.previous = previousNode;
            }
            previousNode.next = followedDeleteNode;
        } else {
            previousNode.next = null;
        }
        this.length--;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.append(11);
myLinkedList.prepend(0);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 2);
myLinkedList.insert(3, 3);
console.log(myLinkedList.printList());
console.log(myLinkedList.lookup(2));
console.log(myLinkedList.lookup(3));
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(5);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);

