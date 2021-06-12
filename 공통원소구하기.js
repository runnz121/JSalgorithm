function CommonEle(arr1, arr2){
   let ar1 = [];

   arr1.sort(function(a,b){return a-b});
   arr2.sort(function(a,b){return a-b});

   for(let i = 0; i < arr1.length; i++){
       for(let j = 0; j <arr2.length; j++){
           if(arr1[i] == arr2[j]){
               ar1.push(arr1[i]);
           }
       }
   }
    const set = new Set(ar1); //중복값이 있는 배열을 set 객체로 만든다 (set객체 생성및 초기화)//set은 유일값을 저장
    const ar2 = [...set]; //중복이 제거된 set 객체를 ar2 배열에 담는다

   return ar2;
}
let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(CommonEle(a,b));