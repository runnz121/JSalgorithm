//BFS는 큐 이용
//처음 육지(1) 만날시 0으로 체크 후 큐에 넣어야 한다
function solution(board){
    let answer=0;
    let n=board.length;
    let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
    let dy=[0, 1, 1, 1, 0, -1, -1, -1];
    let queue = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j]===1){ //섬이 탐색되는 지점
                board[i][j] = 0; //큐에 넣기전 육지를 바다로(0)으로 만들어준다
                queue.push([i,j]);
                answer++;
                while(queue.length){
                    let [x, y] = queue.shift(); // 처음은 (0,0) 이 나온다 n * n 좌표에서 섬에 있는 지점을 (x,y)로 나타냄
                    console.log([x,y]);
                    for(let k = 0; k < 8; k++){
                        let nx = x+dx[k];
                        let ny = y+dy[k];
                        if(nx >= 0 && nx<n && ny>=0 && ny<n && board[nx][ny] === 1){
                            board[nx][ny] = 0; // 바다로 만들고
                            queue.push([nx, ny]); //큐에 넣는다
                        }
                    }
                }
                console.log("END")
            }
        }
    }

    return answer;
}
let arr=[
    [1, 1, 0, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]];
console.log(solution(arr));