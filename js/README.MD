### How Does JS Work

What is Program ?
- Allocate memory
- parse and execute command

In Chrome there is V8 engine
V8 contains 
- Memory Heap (Where memory allocation happens) 
- Call Stack (Code Store here)

---

#### Memory Heap

const a = 1;
Memory heap will remember a has value 1

if we keep introduce new variables, and it's unused also not remove then it can cause memory leak

that's why global variable is bad (dangerous)

---

#### Call Stack
console.log('1'); -> first item in call stack

console.log('2'); -> second item in call stack

console.log('3'); -> third item in call stack

then V8 engine will execute command from latest item (3, 2, 1);

const one = () => {
  const two = () => {
    console.log('4');
  }
}

console.log('4') -> third item

two() -> second item

one() -> first item

// Call stack

Other Languages can have multiple call stack (it's called Multi Threaded)

Why JS design to be Single Thread

You just have one thing to worry about, no problem on deadlock\

--- 
StackOverflow

it's not website, just we keep adding instruction to call stack

// Recursion

function foo() {  

  foo();

}

foo;

V8 will keep register foo function in call stack until it reaches top of call stack then browser will say stackoverflow error

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
