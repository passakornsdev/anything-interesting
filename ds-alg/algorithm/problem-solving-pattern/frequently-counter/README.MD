# Frequently Counter
Use advantage of object access time which is constant to collect values and frequencies

Useful when we want to compare frequency between two value, it can avoid nested loop which take O(n^2) time to be linear time

### For example
we want to know if between 2 arrays have same frequency of each number inside array

group frequencies of each number in array
firstArray loop
 secondArray loop
    check if second array number has same frequency to fist array number
