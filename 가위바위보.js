function RPS(arr1, arr2){
    
    let ans = [];

    for(let i = 0; i<arr1.length; i++){
        if (arr1[i] > arr2[i] && arr1[i] - arr2[i] == 1) {
          ans += "A";
        } else if (arr1[i] > arr2[i] && arr1[i] - arr2[i] == 2) {
          ans += "B";
        } else if (arr1[i] < arr2[i] && arr2[i] - arr1[i] == 1) {
          ans += "B";
        } else if (arr1[i] - arr2[i] == 0) {
          ans += "D";
        } else if (arr1[i] < arr2[i] && arr1[i] - arr2[i] == 2) {
          ans += "B";
        }
    }
    return ans;
}
let arr1 =[2, 3, 3, 1, 3, 1];
let arr2 =[1, 1, 2, 2, 3, 3];
console.log(RPS(arr1, arr2));