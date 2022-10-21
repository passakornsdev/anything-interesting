# Linked List
prepend O(1)

append O(1)

lookup O(n) (require traversal to target node, loop)

insert O(n) (require traversal to target node, loop)

delete O(n) (require traversal to target node, loop)

---

### Why Linked List
#### List List vs Array
Array is stored as group sit to next each elements so it is good when we push or pop but when it comes to insert it requires to shift all the address

If we keep adding item to array then we have to have overhead cost, double space when it reaches limit
when the next memory address is not available then it will be moved to next memory space which requires O(N) time

Linked list is scattered data across memory space it does not require to move whole elements when next memory address is not available also it's can be sorted data compare to hash map which randomly store and can not be sorted

if we need to insert or remove a lot then choose linked list

#### List List vs HashTable
If multiple key get same hash (low hash table size) then we have to add another dimension to hash key which is array
HASH KEY -> ARRAY OF KEY VALUE (HASHKEY ---> [['name', 'steve'], ['surname', 'jo']])
so if we keep adding key to small hash table then this push item array operation can cause excessive overhead cost (copying all item to new address on memory)

### Singly Linked List
One way traversal (from head to tail)

### Doubly Linked List
Two way traversal (head to tail or tail to head)

### Singly Linked List VS Doubly Linked List
#### Singly Linked List 
less memory (no previous node pointer), so when we delete or insert it's faster but can not reversed traversal

Use when we have limited memory also want a fast insertion and deletion, not much searching

#### Doubly Linked List
we can loop from head or tail

but it's fairly complex and require more memory, also extra operation for insert and delete

use it when we have lots of memory and when we want good perf on searching perf eg. reverse loop

---

### JS Pointer and Garbage Collector

const pointer1 = {name: 'john', a: 'test'};

const pointer2 = obj1; // pointer variable, refer to pointer1SA

pointer1.a = 'new val';

console.log(pointer1.a); // log 'new val'

console.log(pointer2.a); // log 'new val'

delete pointer1; // remove pointer1 variable, so only pointer2 variable points to john object

console.log(pointer2.a); // still log 'new val', because pointer2 variable still points to john object

delete pointer2 // remove pointer from john object

// after that john object will be automatically removed from memory by garbage collector, because no variable point to this object
