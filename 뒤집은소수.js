function Prime(num){
    let flag = 1;

    if (num == 1){
        flag = 0;
    }
    for (let i = 2; i<parseInt(Math.sqrt(num)); i++){
        if (num % i == 0)
        flag = 0;
    }

    return flag;
}


function ReversePrime(n, arr){
    let str1;
    let ans = [];
    let ar1 =[];

    str1 = arr.toString().split('').reverse().join('');
    arr = str1.split(",");


    for (let i = 0; i < arr.length; i++) {
      ar1.push(arr[i] * 1);
    }

    for (let j = 0; j < ar1.length; j++){
        if (Prime(ar1[j]) == 1) {
        ans.push(ar1[j]);
        }
    }

    return ans;
}
let n = 9;
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(ReversePrime(n, arr));


// function solution(n) {
//   const 소수들 = new Array(n).fill(true);
//   소수들[0] = false;
//   for (let i = 2; i ** 2 <= n; i++) {
//     if (소수들[i - 1] === true) {
//       for (let j = i ** 2; j <= n; j += i) {
//         소수들[j - 1] = false;
//       }
//     }
//   }
//   return 소수들.filter((e) => e).length;
// }