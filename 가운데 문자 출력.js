function middle(str){

    let ans ="";
        if(str.length % 2 == 0) {
            ans += str[str.length / 2 - 1] + str[str.length / 2];
        }
        else{
            ans += str[Math.ceil(str.length/2)-1];
        }
    return ans;
}
//let str = "good";
//let str = "study";
let str = "abcde";
console.log(middle(str));