function Architect(a,b){
    let que = [];
    let ans = "NO";
    let count = 0;

    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < a.length; j++){
            if(a[j] === b[i]){
                que.push(b[i]);
            }
        }
    }
    for(let k = 0; k < a.length; k++){
        if(que[k]===a[k]){
            count++;
        }
    }
    if(count === que.length){
        ans = "YES";
    }

    return ans;
}
let a="CBA";
let b="CBDAGE";
console.log(Architect(a,b));