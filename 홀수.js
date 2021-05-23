function S_O(){

    let ans = [];
    let min = Number.MAX_SAFE_INTEGER;
    let odd = 0;

    for(i = 0; i<arguments.length; i++){
        if(arguments[i]%2 != 0 ){
        odd += arguments[i];
            if(arguments[i] < min){
                min = arguments[i];
            }
        }
    }  
    ans.push(odd);
    ans.push(min);
    return ans;
}

console.log(S_O(12,77,38,41,53,92,85));

//for(Let x of arr) : 배열이 주어져 있을 경우 for문 돌리는 법
