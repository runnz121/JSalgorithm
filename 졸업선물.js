function Gift(money,arr){
  let max;
  let ar1 = [];
  let ar2 = [];
  let res = [];
  let cmax = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let idx;
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    ar1.push(arr[i][0] * 1);
  }
  for (let j = 0; j < arr.length; j++) {
    ar2.push(arr[j][1] * 1);
  }

  max = Math.max.apply(null, ar1);
  max1 = Math.floor(max / 2);
  ar1.splice(ar1.indexOf(max), 1, max1);

  for (let k = 0; k < ar1.length; k++) {
    res.push(ar1[k] + ar2[k]);
  }
  res = res.sort(function (a, b) {
    //내림차순 정렬
    return b - a; // a-b는 역순 정렬
  });

  //[ 12, 9, 8, 7, 4 ]
  for (let p = 0; p < res.length; p++) {
      idx = res[p];
      sum = idx;
    for (let z = p+1 ; z <arr.length; z++) {
      if (sum <= money) {
        sum += res[z];
        count++;
      }
      if (count > cmax) {
        cmax = count;
      }
    }
    count = 1;
  }

  return cmax;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(Gift(28,arr));