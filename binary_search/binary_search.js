function binary_search(arr, needle) {
  let start = 0;
  let end = arr.length;

  do {
    const mid = Math.floor(start + (end - start) / 2);
    const value = arr[mid];
    if (value === needle) return mid;
    if (value > needle) end = mid;
    if (value < needle) start = mid + 1;
  } while (start < end);
  return "Not found";
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binary_search(array, 5));
console.log(binary_search(array, 12));
