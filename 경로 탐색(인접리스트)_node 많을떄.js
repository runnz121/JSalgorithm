  //경로탐색(인접행렬과 비교)
  
  function solution(n, arr) {
      let answer = 0;
      let graph = Array.from(Array(n + 1), () => Array()); //빈열로 생성
       //console.log(graph);
      let ch = Array.from({ length: n + 1 }, () => 0);
      let path = [];

      for (let [a, b] of arr) {
        graph[a].push(b); //인접리스트로 만들기 위해 
      }
     // console.log(graph);


      function DFS(v) {
        if (v === n) {
          answer++;
         // console.log(path);
        } else {
          for (let i = 0; i < graph[v].length; i++) { //해당 원소의 graph의 길이만큼만 탐색
            if (ch[graph[v][i]] === 0) { //grpah[v][i] v에서 갈 수 있는 정점 번호
                ch[graph[v][i]] = 1;
                path.push(graph[v][i]);
                DFS(graph[v][i]);
                ch[graph[v][i]] = 0;
                path.pop();
            }
          }
        }
      }
      ch[1] = 1;
      path.push(1);
      DFS(1);
      return answer;
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