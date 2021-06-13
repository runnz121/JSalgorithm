function Google(arr){
    let ar1 = [];
    let temp = 0;
    let len = arr.length;

    for(let i = 0; i <= len; i++){
        if(arr[i] < 0){
            temp = arr[i];
            ar1.push(temp);
            arr.splice(arr.indexOf(temp),1);
            i = 0;
        }
    }

   ar1 = ar1.concat(arr);


    return ar1;   

}
let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(Google(arr));