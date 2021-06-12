function Sort(ans, num){
    let res = 0;
    let count = 1;
    
    //4 1 2 3 2 1 1 4 2
    for(let i  =  0; i < ans.length; i++){
        if(ans[i]==ans[i+1]){
            count++;
        }
        if (count == num){
            res++;
        }
    }


    return res;
}

function Mentoring(arr){ 
    let cnt = 0;
    let ans = [];
    let i = j = 0;

    while(i < arr.length){
        ans =[];
        for(let j = 0; j < arr.length; j++){
            for(let k = i+1; k < arr[j].length; k++){
                ans.push(arr[j][k]);
            }
        }        
        i++;
        ans = ans.sort();
        cnt += Sort(ans, arr.length);
    }

    return cnt;
}

let arr = [
  [3, 4, 1, 2], 
  [4, 3, 2, 1], 
  [3, 1, 4, 2], 
]

console.log(Mentoring(arr));

    // while (p > 0) {
    //   ans = [];
    //   while (i < arr.length - 1) {
    //     while (j < arr.length - 1) {
    //       for (let k = arr[i].length - 1; k > j; k--) {
    //         ans.push(arr[i][k]);
    //       }
    //       j++;
    //     }
    //     i++;
    //   }
    //   console.log(ans);
    //   i = 0;
    //   p--;
    //   count += Sort(ans, arr.length);
    // }