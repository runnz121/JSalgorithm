function solution(v) {
 let answer =[];
 let ar1 = [];
 let sum1 = 0;
 let sum2 = 0;
 let sumsum1 = 0;
 let sumsum2 = 0; 
 let ar2 = [];

 for(let i = 0; i < v.length; i++){
         ar1.push(v[i][0]);
         ar2.push(v[i][1]);
}
let arr1 = ar1.slice();
let arr2 = ar2.slice();
sumsum1 = ar1.reduce((s,e) => {
    return s+e;
},0);
sumsum2 = ar2.reduce((s,e) => {
    return s+e;
},0);
arr1 = Array.from(new Set(arr1));
arr2 = Array.from(new Set(arr2));
sum1 = arr1.reduce((s,e) => {
    return s+e;
},0);
sum2 = arr2.reduce((s, e) => {
  return s + e;
}, 0);
answer.push(2*sum1 - sumsum1);
answer.push(2*sum2 - sumsum2);
return answer;
}
let arr = [
  [1, 1],
  [2, 2],
  [1, 2],
];
console.log(solution(arr));