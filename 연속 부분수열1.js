function CNum1(num,arr){
    let count = 0;
    let res =[];
    let sum = 0;
    let arrsum = 0;


    for(let i = 0; i < arr.length; i++){
        res =[];
        sum = 0;
        sum = arr[i];
        res.push(sum);
        for(let j = i+1; j < arr.length; j++){
            sum += arr[j];
            if(sum <= num){
                res.push(arr[j]);
            }
        }
        arrsum = res.reduce((a,b) => (a+b)); //배열 누적합
        if(arrsum == num){
            count++;
        }
    }
  
        return count;      
}
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(CNum1(6,arr));