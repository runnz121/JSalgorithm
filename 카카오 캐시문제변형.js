function Kakao(n,arr){

    let ar1 = Array.from({length : n},() => 0);
    let temp;

    for(let i = 0; i < arr.length; i++){
            job = arr[i];
            if(ar1.indexOf(job) !== -1){ //캐시미스구현 >> 이미배열이 존재함으로
                temp = arr[0];
                arr[0] = job;
                arr.splice(arr.indexOf(job),1);
                ar1.push(job);
            }else{
                ar1.push(job);
                arr.splice(arr.lastIndexOf(),1);
                ar1.shift();
            }
        }

return ar1;


}
let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
let n = 5;
console.log(Kakao(n,arr));