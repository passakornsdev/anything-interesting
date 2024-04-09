### Recursion

Recursive Rules

1. Identify the vase case

2. Identify the recursive case
 
3. Get closer and closer and return when needed

#### Anything you do with recursion can be done iteratively (loop)

Recursion can use to archive DRY and more readable but also create extra memory footprint

Every time we call same function we will reserve new memory space for call stack

##### When to use recursion

When we work on data structure that we don't know how deep is it

- BFS + DFS (Searching)
- Sorting
- https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

##### Every time we are using a tree or converting something into a tree, consider recursion
- Divided into a number of subproblems that are smaller instances of the same problem (like fibonacci)
- Each instance of the subproblem is identical in nature (calculation we need to do all the same)
- The solutions of each subproblem can be combined to solve the problem at hand

Divide and Conquer using Recursion
