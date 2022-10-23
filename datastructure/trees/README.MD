### Trees
Hierarchy Data Structure, We use same node as Linked List but only parent point to child and multiple children

HTML language is tree data structure, Facebook Comment is tree data structure

---
#### Binary Tree
Each nodes can have 1-2 nodes, each child only has single parent, each node represent certain state

##### Perfect Binary Tree
All the leaves node are filled, bottom of tree are filled

This type of tree is preferred, we can know how many node depends on dept

All the node above it plus 1 equals all bottoms node, half of our nodes are on bottom

By organizing data this way, we can avoid visit every node if we want to go to bottom nodes

Lookup O(log N)

Insert O(log N)

Delete O(log N)


##### Full Binary Tree
Node has either 0 or 2 children not one

---

### Binary Search Tree

All left child node must be lower than parent

All right child node must be greater than parent

Then we don't have to literate in linear node

Operation of Unbalanced BST can be linear time

Pros:

Better than O(n), ordered and flexible size (keep growing tree)

Compare to hash table we have sorted data also have parent-child structure

Cons:

No constant time operations

** the operation always log n slow compare to array/hash table but it's still good if we keep balanced BST

---

Use AVL Trees or Red Black Trees Algorithm to balance node, there is opensource lib to use, do not need to impl yourself

##### AVL Tree 

Everytime we insert node then it will traverse backward to check if tree is balanced

Detail: https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7

Animation: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html

##### Red/Black Tree

Detail: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5

Animation: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html

---

### O(log n)

Similar to Divide and Conquer, Don't have to look to all elements just look for some elements and found result

Binary Tree

Level 0: 2^ = 1; 

Level 1: 2^1 = 2;

Level 2: 2^2 = 4; 

Level 3: 2^3 = 8;

For level 3 tree if it's array then we need to visit 8 items

total nodes equation = 2^h - 1;

log nodes = height;

log 100 = 2;

10^2 = 100;
