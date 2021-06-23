//넘어갈때 체크, 뒤로 뺄대는 체크 뺴기
function solution(n, arr){
    let ans = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0)); //2차원 배열 생성
   // console.log(graph);
    let ch = Array.from({length:n+1}, ()=>0); //체크 배열
    path= [];
    for(let [a,b] of arr){
        graph[a][b] = 1;
    }


    function DFS(v){    //v 라는 정점에서 i라는 정점으로 가는지 확인
        if(v===n){
            ans++;
           // console.log(path);
        }
        else{
            for(let i = 1; i<=n; i++){
                if(graph[v][i] === 1 && ch[i] === 0){ //v에서 i로 갈 수 있으면 1 && 체크배열은 0이여야 방문 가능{
                    ch[i] = 1;
                    path.push(i); //경로 지나가면서 있던 원소를 path배열에 넣고
                    DFS(i);
                    ch[i] = 0;
                    path.pop(); //이미 지나왔던 경로 뒤로 돌아가면서 pop으로 원소 빼줌
                }
            }
        }
    }
    path.push(1);
    ch[1]=1; //초기 시작 위치 1은 무조건 체크를 하도록 설정해 주어야 함
    DFS(1);
    return ans;
}
  let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ];
  console.log(solution(5, arr));