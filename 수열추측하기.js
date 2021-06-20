//미리 파스칼 삼각형인것을 추측해야함 즉 4개면 1331 이란것을 미리 알아야함
//1+2+3+4 == 1+2+2+3+3+4 >>> 1+2+2+2+3+3+3+4 임으로 1331이나옴

function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) { //메모이제이션 부분 >> 조합
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) { //답 발견 조건 
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) { //해당 배열 체크 여부 확인
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i); //nCr값을 b배열에 저장
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
