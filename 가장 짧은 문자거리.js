function shortest(str,char){
    let ar1 ="";
    let ar2 ="";
    let ans ="";
    let idx = 1;
    let len = str.length-1;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            idx = 0;
            ar1 += idx;
            idx =1;
        }
        else{
            ar1 += idx;
            idx++;
        }
    }
    for(let j = len; j >= 0; j--){
        if (str[j] == char) {
            idx = 0;
            ar2 += idx;
            idx = 1;
        } else {
            ar2 += idx;
            idx++;
        }
    }
    ar2 = ar2.split('').reverse().join('');    
    for(let k = 0; k <= len; k++){
        min = Math.min(ar1[k],ar2[k]);
            ans += min;
    }
    return ans;
}
let str ="teachermode"; 
        //10121012210
let char ="e";

console.log(shortest(str,char));
