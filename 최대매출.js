function Max(num, arr){
    let len = arr.length - num;
    let i = k = j = pt1 = 0;
    let sum = 0;
    let ar1 = [];
    let ar2 = [];
 
    while(i <= len){
        for(k = i; k < num + i; k++){
            sum += arr[k];
        }
        ar1.push(sum);
        i++;
    }
    
    ar2.push(ar1[0]);
    for(let j = 0; j < ar1.length; j++){   
        ar2.push(ar1[j+1]-ar1[j]);
    }
    ar2.sort((a,b) => b-a);

    return ar2[0];
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(Max(3, arr));