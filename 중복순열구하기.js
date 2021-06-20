function sol(n,m){
    let answer = [];
    let tmp=Array.from({length:m}, ()=>0);
    function dfs(l){
        if(m === l){ // m중 for문 돌림
            answer.push(tmp.slice()); //깊은 복사를 위함
        }else{
            for(let i = 1; i<=n; i++){
                tmp[l] = i;
                dfs(l+1);
            }
        }
    }
    dfs(0);
    return answer;
}
console.log(sol(3,2));