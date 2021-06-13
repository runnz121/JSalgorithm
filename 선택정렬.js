function MIN(arr){
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i=0; i <= arr.length; i++){
        if(min >= arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
    return min;
}
function SS(arr){
    let minfirst = 0;
    let ar1 =[];


    for(let i = 0; i <= arr.length; i++){
        minfirst=MIN(arr);
        ar1.push(minfirst);
        arr.splice(arr.indexOf(minfirst),1);
        i = 0;
    }


    return ar1;

}
 let arr = [13, 5, 11, 7, 23, 15];
 console.log(SS(arr));