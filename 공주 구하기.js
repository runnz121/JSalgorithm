// function SP(prince, num){
//   //shift.배열의 맨 앞을 제거
//   //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from : 시퀀스 생성기
//   let ar1 = Array.from({ length: prince }, (v, i) => i + 1); // 배열 생성 초기화(i = 1씩 증가) prince크기로 배열 생성, 1부터 시작하여 길이 8개 배열 생성
// //   let ar2 = [];
// //   let ar3 = [];
// //   let i = 0;
// //   let len = ar1.length;

// //   j = num-1;
// //   while (i++ < prince-1){
// //       if(j > len-1){
// //           j = j - len;
// //           ar2.push(ar1[j]);
// //           ar1.splice(ar1.indexOf(ar1[j]),1);
// //           len = len-1;          
// //       }
// //       else{
// //           ar2.push(ar1[j]);
// //           ar1.splice(ar1.indexOf(ar1[j]),1);
// //           len = len-1;
// //       }
// //       j = j + num -1;
// //     }
// //     console.log(ar2);
// // }
// console.log(SP(8,3));

//1 2 3 4 5 6 7 8

function SP(prince, num){
  let ar1 = Array.from({ length: prince }, (v, i) => i + 1); 
  let ans;
  let j = 0;


  while(j++ < ar1.length-1){ //j는증가하고 ar1.legnth감소하는 중임으로 같으면 while문 끝 
        for(let i = 1; i < num; i++){ 
            ar1.push(ar1.shift());
        }
        ar1.shift(); //num 까지밖에 안돌기 때문에 맨 앞에있는 원소 반환하고 끝 
    ans = ar1[0];
  }
  


  return ans;
}
console.log(SP(8,3));