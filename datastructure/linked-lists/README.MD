# JS Pointer and Garbage Collector

const pointer1 = {name: 'john', a: 'test'};

const pointer2 = obj1; // pointer variable, refer to pointer1

pointer1.a = 'new val';

console.log(pointer1.a); // log 'new val'

console.log(pointer2.a); // log 'new val'

delete pointer1; // remove pointer1 variable, so only pointer2 variable points to john object

console.log(pointer2.a); // still log 'new val', because pointer2 variable still points to john object

delete pointer2 // remove pointer from john object

// after that john object will be automatically removed from memory by garbage collector, because no variable point to this object
