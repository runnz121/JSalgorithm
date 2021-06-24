function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1]; //계단오르기랑 같은 점화식이지만 n+1이여야함(돌 다음장소가 도착지점임으로)
  return answer;
}

console.log(solution(7));
