function rank(arr){
    let ans = new Array(arr.length);
    let count = 0;

    for (let j = 0; j < arr.length; j++){
        ans[j] = 1;       
    } 

    for (let i = 0; i < ans.length; i++){
        count = 0;
        for (let j = 0; j < ans.length; j++){
            if(arr[i] < arr[j]){
                count++;
            }
        }
    ans[i] += count;
    }
    return ans;
}

let arr = [87, 89, 92, 100, 76]

console.log(rank(arr));