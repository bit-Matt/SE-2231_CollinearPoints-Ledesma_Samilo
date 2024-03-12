function merge<value>(left: value[], right: value[], comparator: (a: value, b: value) => number): value[] {
  let result: value[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (comparator(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort<value>(array: value[], comparator: (a: value, b: value) => number): value[] {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left, comparator);
  const sortedRight = mergeSort(right, comparator);

  return merge(sortedLeft, sortedRight, comparator);
}

// sample tests
// const numberArray: number[] =
//   mergeSort([100, 38, 57, 5, 69, 9, 213]);
// console.log(numberArray);

export default mergeSort;