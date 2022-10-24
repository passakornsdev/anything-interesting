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

### Selection Sort

Also one of simpler sorting algorithm

Best: O(n^2)

Average: O(n^2)

Worst: O(n^2)

Space: O(1)