function sol(n){
    let ans = [];
    let ch = Array.from({length:n+1}, () => 0);
    function DFS(v){
        if(v === n+1){
            let temp ="";
            for(let i = 1; i<=n; i++){
                if(ch[i] === 1) temp += i+" ";
            }
            if(temp.length>0) ans.push(temp.trim());
        }
        else{
            ch[v]=1; //v라는 원소를 포함시키면 1로 체크
            DFS(v+1);
            ch[v]=0; //v라는 원소를 포함 안시키면 0으로 체크
            DFS(v+1);
        }
    }
    DFS(1)
    return ans;
}
console.log(sol(3))

//부분집합 갯수 2^원소갯수 => 원소가 참여할수도 있고 안할 수도 있고