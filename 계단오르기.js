//동적 계획법이란 ? => 큰 문제를 작은 단위로 쪼갬
//작은 문제의 답을 점화식으로 연결시켜 넓혀감
function solution(n) {
    let answer = 0;
    let dy = Array.from({ length: n + 1 }, () => 0); //dy[x] x까지 가는데 생기는 방법의 갯수
    dy[1] = 1; //1번쨰 계단을 가는 방법 1가지
    dy[2] = 2; //2번째 계단을 가는 방법 2가지
    for (let i = 3; i <= n; i++) {//3번쨰 계단부터 시작
    dy[i] = dy[i - 2] + dy[i - 1];//점화식을 발견 하여 적용(다음 계단까지 가는방법 = 1단계 전까지 가는방법 + 2단계 전까지 가는방법)
    }
    answer = dy[n];
    return answer;
}

console.log(solution(7));