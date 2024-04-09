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

    // Typical way to do BFS
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        // this queue can get very large, memory consumption can hurt us
        // if we have very wide tree, this queue could get really big
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchR(queue, list = []) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }
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
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchR([tree.root]));
