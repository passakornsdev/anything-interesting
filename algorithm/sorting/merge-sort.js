const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  console.log("left", left);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergeResult = new Array(left.length - 1 + (right.length - 1));
  let leftIndex = 0;
  let rightIndex = 0;
  let insertIndex = 0;
  while (left[leftIndex] !== undefined && right[rightIndex] !== undefined) {
    if (left[leftIndex] > right[rightIndex]) {
      mergeResult[insertIndex] = right[rightIndex];
      rightIndex++;
    } else {
      mergeResult[insertIndex] = left[leftIndex];
      leftIndex++;
    }
    insertIndex++;
  }
  if (leftIndex < left.length) {
    for (let i = leftIndex; i < left.length; i++) {
      mergeResult[insertIndex] = left[i];
      insertIndex++;
    }
  }
  if (rightIndex < right.length) {
    for (let i = rightIndex; i < right.length; i++) {
      mergeResult[insertIndex] = right[i];
      insertIndex++;
    }
  }
  console.log("merge", left, right, mergeResult);
  return mergeResult;
}

const answer = mergeSort(numbers);
console.log("answer", answer);
