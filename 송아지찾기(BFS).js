//3갈래로 뻗는데 각 길마다 -1,+1,+5의 값이 다음 노드값으로 정해짐
//다음 노드 값이 이미 존재하는 값이면, 저장하지 않도록 체크 배열 생성
//체크 배열에는 해당 값이 존재하는 노드 레벨을 저장

function solution(s, e){
    let answer = 0;
    let ch = Array.from({length:10001}, () => 0);
    let dis = Array.from({length:10001}, () => 0);
    let queue =[];
    ch[s] = 1; //출발지점 1로 체크
    queue.push(s);
    dis[s] = 0;
    while(queue.length){
        let x = queue.shift(); //첫 출발 좌표 5가 나옴
        for(let nx of [x-1, x+1, x+5]){ //3가지 값으로 뻗는다.
            if(nx ===e) return dis[x]+1 //점핑해서 온 값이 dis에 저장되고 거기서 +1를 해줘야 nx값이 나옴 이것을 리턴
            if(nx > 0 && nx <=10000 && ch[nx] === 0){
                ch[nx] =1; //이미 탐색했음으로 체크
                queue.push(nx);
                dis[nx] = dis[x] +1; // 자기 자신은 부모노드 의 거리값 +1을 해준다. (도착지점이 아닌 경우 이런식으로 돈다)
            }
        }
    }

    return answer;
}
console.log(solution(5,14));