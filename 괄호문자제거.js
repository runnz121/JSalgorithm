function DelBracket(){
    let ar1 =[];
    let ans  = "";
    let idx = 0;
    let count = 0;

    for(let x of str){
       // if(count === 0 && x !== "(" && x !== ")"){
        if(x === "("){
            idx = 1;
            x++;
            count += idx;
        }else if(x === ")"){
            idx = -1;
            x++;
            count += idx;
        }
        if (count === 0 && x !== "(" && x !== ")" && typeof(x) === 'string') {
          ar1.push(x);
        }
       // }        
    }

    for(let y of ar1){
        ans += y;
    }

    return ans;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(DelBracket(str));