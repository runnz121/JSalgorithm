function sol(num, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: num }, () => 0);
  function dfs(l) {
      if(l===num){
          answer.push(tmp.slice());
      }
      else{
          for(let i = 0; i < n; i++){
              if(ch[i]===0){ //체크베열이 0이면
                  ch[i]=1; //1로 바꾸고
                  tmp[l]=arr[i]; //tmp복사
                  dfs(l+1); //재귀 레벨 증가
                  ch[i]=0;
              }
          }
      }
  }
  dfs(0);
  return answer;
}
let arr = [3, 6, 9];
console.log(sol(2, arr));