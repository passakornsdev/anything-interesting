# Searching Algorithm

##### Linear Search - O(n) 

for unsorted data

##### Binary Search - O(log n) 

for sorted data

## Graph and Tree Traversals - O(n)

Why we don't push complex data as sorted because we get because we get o(log n) search

Hash table aren't ordered, not good for searching

#### Breadth First Search (BFS)

You start with root node and move left or right to next level until we reach the bottom node

it uses additional memory to track every node and it's children and it's order

if we know that the result is on upper level then BFS is better than DFS

Pros
- Shortest Path
- Closer Nodes

Cons
- More Memory

#### Depth First Search (DFS)

start from left branch, search down to bottom and move to nearest ancestor

it uses lower memory than BFS, the idea is we want to go deepest as possible before we move to next sibling

There are 3 diff way to return items

//  101
// 33 105

inorder - 33, 101, 105 (from left to right)
preorder - 101, 33, 105 (start from parent and go down to left and right, useful if we want to recreate tree)
postorder - 33, 105, 101 (grab from bottom to top)


Pros:
- Less memory (than BFS)
- Does Path Exist ?

Cons:
- Can get Slow (if tree or graph is really deep)

```
      9
    4   20
  1  6 15 170
  
  BFS [9,4,20,1,6,15,170] (go by x axis)
  
  DFS [9,4,1,6,20,15,170] (go by y axis)
```


