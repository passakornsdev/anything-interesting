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

    lookup(value) {
        let currentLookedUpNode = this.root;
        while (!!currentLookedUpNode && currentLookedUpNode?.value !== value) {
            if (currentLookedUpNode.value >= value) {
                currentLookedUpNode = currentLookedUpNode.left;
            } else if (currentLookedUpNode.value <= value) {
                currentLookedUpNode = currentLookedUpNode.right;
            }
        }
        return currentLookedUpNode;
    }

    remove(value) {
        if (!this.root) {
            return;
        }
        const {removedNode, parentRemovedNode, fetchFromLeftOfParent} = this.findRemovedNodeAndParent(value);
        const {closestRemovedNode, parentClosestRemovedNode, fetchClosestNodeFromLeft} = this.findClosestValueRemovedNode(removedNode);
        if (parentClosestRemovedNode) {
            if (fetchClosestNodeFromLeft) {
                parentClosestRemovedNode.left = null;
            } else {
                parentClosestRemovedNode.right = null;
            }
        }
        if (parentRemovedNode) {
            if (fetchFromLeftOfParent) {
                parentRemovedNode.left = closestRemovedNode;
            } else {
                parentRemovedNode.right = closestRemovedNode;
            }
        }
        if (closestRemovedNode) {
            closestRemovedNode.left = removedNode.left;
            closestRemovedNode.right = removedNode.right;
        }
        removedNode.left = null;
        removedNode.right = null;
        return removedNode;
    }

    findRemovedNodeAndParent(value) {
        let currentLookedUpNode = this.root;
        let removedNode = null;
        let parentRemovedNode = null;
        let fetchFromLeftOfParent = false;
        while (true) {
            if (!currentLookedUpNode) {
                break;
            }
            if (currentLookedUpNode.value === value) {
                removedNode = currentLookedUpNode;
                break;
            } else {
                parentRemovedNode = currentLookedUpNode;
                if (currentLookedUpNode.value < value) {
                    fetchFromLeftOfParent = false;
                    currentLookedUpNode = currentLookedUpNode.right;
                } else {
                    fetchFromLeftOfParent = true;
                    currentLookedUpNode = currentLookedUpNode.left;
                }
            }
        }
        return {removedNode, parentRemovedNode, fetchFromLeftOfParent};
    }

    findClosestValueRemovedNode(removedNode) {
        if (!removedNode?.left && !removedNode?.right) {
            return {};
        }
        let currentLookedUpNode = removedNode;
        let parentClosestRemovedNode = removedNode;
        let closestRemovedNode = null;
        let fetchClosestNodeFromLeft = null;
        while (true) {
            if (!currentLookedUpNode?.left && !currentLookedUpNode?.right) {
                closestRemovedNode = currentLookedUpNode;
                break;
            }
            parentClosestRemovedNode = currentLookedUpNode;
            if (currentLookedUpNode?.right) {
                fetchClosestNodeFromLeft = false;
                currentLookedUpNode = currentLookedUpNode.right;
            } else if (currentLookedUpNode?.left) {
                fetchClosestNodeFromLeft = true;
                currentLookedUpNode = currentLookedUpNode.left;
            }
        }
        return {closestRemovedNode, parentClosestRemovedNode, fetchClosestNodeFromLeft};
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
console.log(tree.lookup(1));
console.log(tree.remove(170));
console.log(JSON.stringify(traverse(tree.root)));

const tree2 = new BinarySearchTree();
tree2.insert(60);
tree2.insert(30);
tree2.insert(72);
tree2.insert(1);
tree2.insert(54);
tree2.insert(73);
tree2.insert(30);
tree2.insert(14);
// tree2.insert(51);
tree2.insert(38);
tree2.insert(55);
tree2.insert(44);
console.log(tree2.remove(54));
console.log(tree2.remove(30));
console.log(JSON.stringify(traverse(tree2.root)));


function traverse(node) {
    const tree = {value: node.value};
    tree.left = !node.left ? null : traverse(node.left);
    tree.right = !node.right ? null : traverse(node.right);
    return tree;
}
