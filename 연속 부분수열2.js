// function Array2(row, col){
//     let arr = new Array(row);
//     for(let i = 0; i<row; i++){
//         arr[i] = new Array(col);
//     }
//     return arr;
// }

function CNum2(num, arr) {
  let count = 0;
  let sum = 0;
  let i = 0;

  while(i < arr.length){
    for(let k = i; k < arr.length; k++){
      if(sum < num){
        count++;
        sum += arr[k];
        console.log(sum);
      }
    }
    i++;
  }

  return count;
}
let arr = [1, 3, 1, 2, 3];
console.log(CNum2(5, arr));
