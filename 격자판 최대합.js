function MaxSum(arr){
    let ans = Number.MIN_SAFE_INTEGER;
    let temp1 = 0;
    let temp2 = 0;
    let answer =[];


    for(let i = 0; i < arr.length; i++){
        temp1 = 0;
        temp2 = 0;
        for(let j = 0; j < arr.length; j++){
            temp1 += arr[i][j];
            temp2 += arr[j][i]; 
        }
        answer.push(temp1);
        answer.push(temp2);
    }

    temp1 = 0;
    temp2 = 0;
    for(let i = 0; i<arr.length; i++){
        temp1 += arr[i][i];
        temp2 += arr[i][arr.length-i-1];
        answer.push(temp1);
        answer.push(temp2);
    }

    for(let k = 0; k<answer.length; k++){
        if (answer[k]<answer[k+1]){
            ans = answer[k+1];
        }
    }
    
    return ans;
}

let arr = [
    [10, 13, 10, 12, 15], //[0][] //[i][j]
    [12, 39, 30, 23, 11], //[1][]
    [11, 25, 50, 53, 15], //[2][]
    [19, 27, 29, 37, 27], //[3][]
    [19, 13, 30, 13, 19], //[4][]
];
console.log(MaxSum(arr));