function solution(board){
    let answer = 0;
    let n = board.length;
    let dx = [-1,-1,0,1,1,1,0,-1]; //시계방향
    let dy = [0,1,1,1,0,-1,-1,-1];

    function DFS(x,y){
        board[x][y]=0;
        for(let k = 0; k<8; k++){
            let nx=x+dx[k]; //next 좌표 설정
            let ny=y+dy[k];
            if(nx >=0 && nx<n && ny>=0 && ny<n && board[nx][ny] === 1){ //가려는 지점이 땅인 것을 설정
                DFS(nx, ny);
            }
        }
    }
    for(let i = 0; i <n; i++){
        for(let j= 0; j<n; j++){
            if(board[i][j] === 1){   
                answer++;//섬이 발견됬음으로 ++
                DFS(i,j);
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