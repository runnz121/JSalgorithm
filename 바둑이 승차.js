function sol(num,arr){
    let max = Number.MIN_SAFE_INTEGER;
    function dfs(l, sum){
        if(sum > num) { //주어진 값보다 누적합이크면 종료
            return;
        }
        if(l === arr.length){//들어간 레벨이 배열길이가되면 최대값 구함
            max = Math.max(max, sum);
        }
        else{
          dfs(l + 1, sum + arr[l]); //그렇지 않으면 레벨 + 1증가, 누적합 + 배열원소값 더하고
          dfs(l + 1, sum); //반대편 노드레벨 증가 누적합
        }
    }
    dfs(0,0);
    return max;
}
  let arr = [81, 58, 42, 33, 61];
  let num = 259;
  console.log(sol(num,arr));