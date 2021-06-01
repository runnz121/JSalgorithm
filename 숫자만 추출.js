function NumOnly(str){
    let ans = 0;
    let ar1 = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] >= 0 && str[i] <= 9){
            ar1 += str[i];
        }      
    }

    ar1 = parseInt(ar1);
    ans = ar1;
    return ans;
}

let str="g000en2T0s8eSof11t";
console.log(NumOnly(str));