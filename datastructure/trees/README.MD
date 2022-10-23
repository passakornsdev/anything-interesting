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

### Binary Heap

Every nodes on top of them have higher value to below node, left and right can be any value below top node, less order than BST

Binary Heap inserts item from left to right, and you can use array to build BH and they take lower memory then BST

Why we want to use, sometimes we want to know how many node has value than 33 then we can just graps node 33

Note: Memory Heap != Heap Data Structure, Memory Heap is free storage we can store arbitrary data

Animation: https://visualgo.net/en/heap

Lookup O(N)

Insert O(log N) (We need to check every node in order to find value)

Delete O(log N)


### Priority Queue

Each elements have priority so it's not always FIFO,

Insert from top and then left to right also priority element can replace at the top

Pros:

Better than O(n)

Priority (Insertion done in order, we know what to be first, second third)

Flexible Size

Fast Insert (For priority Element)

Cons:

Slow lookup (we want to use when we want to find max or min and we have method findMax/Min which is O(1))

---

### Trie (tr-ie)

In most cases it can out-perform BST, BH, HT and most of data structures depends on type of searching

Start with empty root node and have value below root nodes

Example use cases we use for dictionary, searching word

Benefit of this data structure is speed and space, O(length of the word)

We store as, A is stored single time then link to S and R

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
