function sol(m,ps,pt){
    let max = Number.MIN_SAFE_INTEGER;
    function dfs(l, sum, time){
        if(time > m){
            return;
        }
        if(l === ps.length)
        {
            max = Math.max(max,sum);
        }
        else{
            dfs(l+1, sum+ps[l], time+pt[l]);
            dfs(l + 1, sum, time);
        }

    }
    dfs(0,0,0);
    return max;
}
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(sol(20,ps,pt))