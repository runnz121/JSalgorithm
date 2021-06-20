function sol(arr){
    let ans = "NO";
    let total = arr.reduce((a,b) => a+b, 0);
    let n = arr.length;
    let flag = 0;
    function dfs(l, sum){ //레벨, 해당 레벨 배열원소 누적합값
        if(flag) return; //flag 존재시 종료
        if(l === n ){//인덱스가 배열 길이일때 종료조건
            if((total-sum)===sum){
                ans = "YES"; //반대편 원소의 합이 현재 값과 같은 경우 존재
                flag = 1; 
            }//답 존재시 flag 변수 설정
        } 
        else{
            dfs(l+1, sum+arr[l]); //다음원소, 누적합 + 다음 원소값 더함
            dfs(l+1, sum);
        }
    }
    dfs(0,0);
    return ans;
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(sol(arr));