function BS(arr) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = 0;
    }
  }
  return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(BS(arr));
