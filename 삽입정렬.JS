function InsertArr(arr){

    for(let i = 1; i < arr.length; i++){
        key = arr[i];
       while((arr[i] > 0) && (arr[i-1] > arr[i])){
            let temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
            i--;
            }
    }


    return arr;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(InsertArr(arr));