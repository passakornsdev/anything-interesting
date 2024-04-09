class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let parentNode;
            let currentLookedUpNode = this.root;
            while (!parentNode) {
                if (currentLookedUpNode.value >= value) {
                    if (!currentLookedUpNode.left) {
                        parentNode = currentLookedUpNode;
                    } else {
                        currentLookedUpNode = currentLookedUpNode.left;
                    }
                } else if (currentLookedUpNode.value <= value) {
                    if (!currentLookedUpNode.right) {
                        parentNode = currentLookedUpNode;
                    } else {
                        currentLookedUpNode = currentLookedUpNode.right;
                    }
                }
            }
            if (currentLookedUpNode.value !== value) {
                if (currentLookedUpNode.value < value) {
                    currentLookedUpNode.right = new Node(value);
                } else {
                    currentLookedUpNode.left = new Node(value);
                }
            }
        }
        return this;
    }

    DFSInorder() {
        return traverseInOrder(this.root);
    }

    DFSPostOrder() {
        return traversePostOrder(this.root);
    }

    DFSPreorder() {
        return traversePreOrder(this.root);
    }
}

function traverseInOrder(node, list = []) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list = []) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

function traversePreOrder(node, list = []) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

//      9
//   4    20
//  1 6  15 170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log('DFSInorder', tree.DFSInorder());
console.log('DFSPostOrder', tree.DFSPostOrder());
console.log('DFSPreorder', tree.DFSPreorder());
