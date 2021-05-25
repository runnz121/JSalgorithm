function Longest(str){

    let ans ="";
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of str){
        if(x.length > max){
            max = x.length;
            ans = x;
        }
    }
    return ans;    
}

 let str = ["teacher", "time", "student", "beautiful", "good"];
 console.log(Longest(str));