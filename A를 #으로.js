function change(str){

    let ans = "";
    for(let x of str){
        if(x == 'A'){
            ans += '#';
        }
        else {
            ans += x;
        }
    }
    return ans;
}


let str = "BANANA";
console.log(change(str))