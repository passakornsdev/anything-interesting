# Sliding Window Pattern

This pattern creates window from one position to another, window will increase or decrease depends on condition

Useful to keep track of subset of data in array/string etc.

### How to use Sliding Window Technique?

The general use of Sliding window technique can be demonstrated as following:

1. Find the size of window required
2. Compute the result for 1st window, i.e. from start of data structure
3. Then use a loop to slide the window by 1, and keep computing the result window by window.


Find largest sum of array number of given nth length

Input: Arr, sum length

maxSubArraySumOpt([6, 2, 9, 2, 1, 8, 5, 6, 3], 3) = 19 (8 + 5 + 6)

Start with sum of 2 6 9 = 17

move to next position, minus first position (6) and add next position (2)

compare which sum is greater then continue
