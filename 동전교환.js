function sol(m, arr){
    let ans = Number.MAX_SAFE_INTEGER;
    let n = arr.length;
    function dfs(l,sum){ //동전 갯수, 누적합
        if(sum > m){ //누적합이 더 클경우
            return;
        }
        if(l > ans){ //최소갯수가 이미 구해져있으면 굳이 다른 가지를 볼 수 없게 (레벨이 기존 답보다 클 경우 종료)
            return;
        }
        if(sum === m){
            ans = Math.min(ans,l);
        }else{
            for(let i = 0; i < n; i++){
                dfs(l+1, sum+arr[i]);
            }
        }
    }
    dfs(0,0);
    return ans;
}


let arr = [1, 2, 5];
console.log(sol(15, arr));