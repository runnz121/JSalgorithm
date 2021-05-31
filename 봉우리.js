function top(arr){
    let count = 0;
    let x = [-1,0,1,0];
    let y = [0,1,0,-1];

    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j< arr.length; j++){
        let idx  = 1;
        for(let k = 0; k < 4; k++){
            let s1 = i + x[k];
            let s2 = j + y[k];
            if(s1>= 0 && s1<arr.length && s2 >=0 && s2 <arr.length && arr[s1][s2] >= arr[i][j]){
              idx = 0;
           }
        }
        if(idx == 1){
          count++;
        }
      }
    }


    return count;
}


let arr = [
[5, 3, 7, 2, 3],//[i][j]
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2],
];
console.log(top(arr));