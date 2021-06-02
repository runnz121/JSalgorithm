function strzip(str){
    let count = 1;
    let ans = "";

    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i + 1]) {
            count++;
        }else if (str[i] != str[i + 1]){
            if(count == 1){
                ans += str[i];
            }
            else{
                    ans += str[i] + String(count);
            }        
            count = 1;
        }
    }
    return ans;
}
let str = "KKHSSSSSSSE";
console.log(strzip(str));