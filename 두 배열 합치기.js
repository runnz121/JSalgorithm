function CA(arr1, arr2){
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++){
        arr3.push(arr1[i]);
    }

    for(let j = 0; j < arr2.length; j++){
        arr3.push(arr2[j]);
    }

    arr3.sort(function(a,b) {return a-b});
    
    return arr3;

}
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(CA(a,b));

//https://hianna.tistory.com/397 자바스크립트 배열 합치기