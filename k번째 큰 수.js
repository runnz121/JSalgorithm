function Knum(arr,num){
  let sum = 0;
  let ar1 = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        ar1.push(sum);
        sum = 0;
      }
    }
  }
  ar1.sort(function (b, a) {
    return a - b;
  });

  //https://hianna.tistory.com/422 자바스크립트 배열 원소 중복제거
  const set = new Set(ar1);
  const ar2 = [...set];

  return ar2[num-1];

}

 let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(Knum(arr,3));