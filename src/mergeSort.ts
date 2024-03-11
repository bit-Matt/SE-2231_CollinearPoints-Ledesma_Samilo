function mergeSort(array: any[]): any[] {
  if (array.length <= 1) {
      return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left: any[], right: any[]): any[] {
  let result: any[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length &&
      rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  return result.concat(left.slice(leftIndex)).
      concat(right.slice(rightIndex));
}

// sample tests
const sortedNumberArray: number[] =
    mergeSort([100, 38, 57, 5, 69, 9, 213]);
const sortedStringArray: string[] =
    mergeSort(['this', 'is', 'not', 'a', 'sorted', 'array']);
console.log(sortedNumberArray);
console.log(sortedStringArray);

export default { mergeSort };