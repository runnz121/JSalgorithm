function solution(board){
    let answer=0;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    function DFS(x, y){
        if(x === 6 && y === 6) answer++; //n-1만큼(인덱스 이동시)
        else{
            for(let k= 0; k<4; k++){
                let nx = x+dx[k];
                let ny = y+dy[k];
                if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0){ //경계선 처리 && 보드에 갈려고 하는 지점이 0인 경우(통로)
                    board[nx][ny] = 1; //지나갔으면 1로 체크 해줌
                    DFS(nx, ny); //이 좌표로 이동
                    board[nx][ny] = 0; //뒤로 백할 경우 0으로 체크 풀어줌
                }
            }
        }
    }
    board[0][0] = 1;
    DFS(0,0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));