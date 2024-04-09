# Sorting

why we need sorting even though we have built-in sorting function

Sorting is not big deal when dealing with small data, when input get larger it starts causing a lot of money from company

Bubble Sort, Insertion Sort, Selection Sort are elementary sorting

https://www.toptal.com/developers/sorting-algorithms

##### Built-it sort function on JS Array

```
const basket = [2, 65, 34, 2, 1, 7, 8];
basket.sort() // [1, 2, 2, 34, 65, 7, 8];
basket.sort(function (a,b) {
  return a - b;
}); // [1, 2, 2, 7, 8, 34, 65];
``` 

The way it sorts number, it converts number to string

it takes 65 and convert to string then charCodeAt(0)

'65'.charCodeAt(0) it returns 54 (54 is char code of 6) so value of number 64 equals to 54 in sort function

so that's why 7 is higher then 64

--- 

### Bubble Sort

One of the simplest sorted algorithm but also least efficient

Best: O(n)

Average: O(n^2)

Worst: O(n^2)

Space: O(1)

---

### Selection Sort

Also one of simpler sorting algorithm

Best: O(n^2)

Average: O(n^2)

Worst: O(n^2)

Space: O(1)

---

### Insertion Sort

Also not efficient but some cases are very efficient

When it's already sorted, the time complexity is O(n)

Best: O(n) (data really small or list almost sorted)

Average: O(n^2)

Worst: O(n^2)

Space: O(1)

---

### Merge Sort (Divide and Conquer, always give log n)

One of the most efficient way to sort thing, perform better than most of sorting algorithm

n log n = first n comes from we look at every items in array, log n because we don't have to compare everything to everything, just compare everything with something

Best/Average/Worst: O(n log(n))

space: O(n)

---

### Quick Sort (Divide and Conquer, always give log n)

Best/Average: O(n log(n))

Worst: O(n^2)

Space: O(log (n)) 

when the pivot is smallest or largest item then we do not split item into half, if the list pre-sorted and we pick first or last then it will take long time

Ideally quick sort we should pick pivot smartly

---

### Which sort is best ?

#### Insertion Sort, 

should be used when we get small input or almost sorted input

#### Bubble Sort & Selection Sort, 

never use it, for educational purpose only

#### Merge Sort, 

- it's fast and it's always O(n log n), if you worry worst case then use merge sort
- if you sort in-memory data then merge sort will cost a lot of memory usage
- if you have huge file and we run merge sort as external function then it's good to go because we don't need to care about space

#### Quick Sort, 

if we don't pick pivot carefully then worst case can be O(n^2)

#### Heap Sort, 

All time cases O(n log n) but average is slower than quick sort but space is O(1), more daetail: https://brilliant.org/wiki/heap-sort/

#### Bucket Sort + Counting Sort

Sorting can not be lower than O(n log n), because we need to sort by comparison, need to compare every number

Radix Sort: https://brilliant.org/wiki/radix-sort/

Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

Counting Sort: https://brilliant.org/wiki/counting-sort/

Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

##### Non-Comparison Sort

They're able to beat speed of O(n log n)

Only work with number and restricted range, 0 - 100 you can use this to speed up sorting
