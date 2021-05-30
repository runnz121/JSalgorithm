function visibleStudent(arr){
    let count = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i+1]){
            min = arr[i];
            count++;
        }
    }
    return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153 ];
console.log(visibleStudent(arr));