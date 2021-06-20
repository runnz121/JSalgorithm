function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];

    if (n === r || r === 0) return 1; //nCr에서의 n 과 r이 같거나 0인 경우 1이 나옴으로

    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); //nCr = n-1Cr-1 + n-1Cr의 공식을 이용함 그리고 배열을 사용해서 {n,r}의 값을 미리 저장해놓고 같은값이
    //들어오면 그 값을 이용
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
