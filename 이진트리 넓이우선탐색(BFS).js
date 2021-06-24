//queue 기준으로 선입 선출 
//출발 지점에서 한번만에 갈 수 있는 곳
//최단거리 방법론
function solution(){
    let answer = "";
    let queue=[];

    queue.push(1);
    while(queue.length){
        let v = queue.shift(); //배열 맨 앞을 제거한다
        answer += v + " ";
        for(let nv of [v*2, v*2+1]){ //push(v*2), push(v*2+1) 각각 써주는 것을 이렇게 한번에 처리
            if(nv > 7) continue; //7보다 크면 push안함
            queue.push(nv);
        }
    }
    return answer;
}
console.log(solution());