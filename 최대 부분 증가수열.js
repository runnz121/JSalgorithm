//입력된 원소를 배열에 넣음(arr)
//dy[i] 배열엔 (arr 의 i번째 숫자가 증가수열의 마지막 숫자이다)
//arr 의 i번째 기준으로 자기보다 앞에 있는 <- 방항의 숫자중 자기보다 작은것이 있는지를 확인 후 dy 배열에 해당 위치에 count갯수를 기록
//이때 dy에 기록된 값이 여러개이면 이중 가장 큰 값을 기준으로 계산한다.
//ex arr =>  5 3 7 8 에서 8의 경우
//    dy =>  1 1 2 3(2+1) > 가장큰 수 2 + 1(자기자신)해서 3이되는것

function solution(arr) {
    let answer = 0;
    let dy = Array.from({ length: arr.length }, () => 0); //갯수 반환하는 배열 셋팅
    dy[0] = 1; //초기값 셋팅
    for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i] && dy[j] > max) { //앞의 항이 되면서 && j번째 숫자가 최대항의 수열의 숫자이면서 dy[j]에 저장되어있음
        max = dy[j];
        }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
    }
    return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));