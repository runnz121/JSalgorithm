function AllSum(n,arr){
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let ans = [];
  let ans1 = [];
  let idx = [];
  let count = 0;
  let tmp;

  tmp = arr.slice(); //배열 복사

  for (let i = 0; i < n; i++) {
    sum = 0;    
    do {
      sum += arr[i] % 10;
      arr[i] = Math.floor(arr[i] / 10);
      count = arr[i]
    } while (count > 0);
    ans.push(sum);
  }

  max = Math.max.apply(null, ans);
  //console.log(Math.max.apply(null, ans)); //apply : 인자를 하나로 묶어 배열로 만들어 넣음 //https://velog.io/@josworks27/%ED%95%A8%EC%88%98%ED%98%B8%EC%B6%9C-call-apply-bind-%EC%B0%A8%EC%9D%B4
//   for (let k = 0; k < ans.length; k++) {
//     if (ans[k] <= ans[k + 1]) {
//       max = ans[k + 1];
//     }
//   }

  for (let j = 0; j < ans.length; j++) {
    if (max == ans[j]) {
      idx.push(j);
    }
  }
  for (let k = 0; k < idx.length; k++){
      ans1.push(tmp[idx[k]]);
  }
 return Math.max.apply(null, ans1);

}
let n = 7;
let arr = [128, 460, 603, 40, 521, 137, 123]; // 11 10 9 4 8 11 6
console.log(AllSum(n,arr));