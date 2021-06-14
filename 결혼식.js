function Wdd(arr){
  let count = 1;
  let ar1 = [];
  let ar2 = [];
  let ar3 = [];
  let ar4 = [];
  let max = Number.MIN_SAFE_INTEGER;
  let maxC = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length; i++) {
    ar1.push(arr[i][1]);
  }
  max = Math.max.apply(null, ar1); //arr[i][1] 의 최대값을 구한다 최고로 늦은시간까지 존재하는 경우생각(인덱스 범위)

  for(let z = 0; z < arr.length; z++){
      for(let x = 0; x < 2; x++){
          ar2.push(arr[z][x]);
      }
  }
  ar2.sort((a,b) => a-b); //2차원배열을 1차원 배열로
//  console.log(ar2);

 for (z = 0; z < arr.length; z++) {
     ar3.push(arr[z][0]);
 }
 for (z = 0; z < arr.length; z++) {
     ar4.push(arr[z][1]);
 }
//  console.log(ar3);
//  console.log(ar4);

let k = 0;
let idx1 = 0;
let idx2 = 0;
while(k < max){ //1차원 배열 비교 30까지 증가시키면서 두 배열의 값이 존재할 경우 해당 배열 인덱스 하나씩 증가, 감소로 최대값 구함
      if (
      (k === ar3[idx1] && k === ar4[idx2]) 
    ) {
        k++;
    } else if (k == ar4[idx2]) {
      sum -= 1;
      idx2++;
    } else if (k === ar3[idx1]) {
      sum +=1;
      idx1++;
    }
    if(sum > maxC){
        maxC = sum;
    }
    k++;
}

  return maxC;
}
    let arr = [
      [5, 14],
      [12, 15],
      [14, 18],
      [15, 20],
      [20, 30]      
    ];
console.log(Wdd(arr));