function Cchar(str){

    let ans = "";

     for(let x of str){
        if(x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90){
            ans += String.fromCharCode(x.charCodeAt(x) + 32);
        }
        else{
            ans += String.fromCharCode(x.charCodeAt(x) - 32);
        }
    }
    return ans;
}

let str = "StuDY";
console.log(Cchar(str));