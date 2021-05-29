function bigNum(str){
    let ans = [];
    ans.push(str[0]);
    for(let i = 1; i <str.length; i++){
        if (str[i] > str[i-1]){
            ans.push(str[i]);
        }
    }
    return ans;


}
let str = [7, 3, 9, 5, 6, 12];
 console.log(bigNum(str));