function Sort(idx1, idx2, idx3, array) {
  let ar1 = [];
  let ans;
  ar1 = array.slice(idx1, idx2); 
  ar1.sort(function (a, b) {
    return a - b;
  });

  console.log(ar1);
  ans = ar1[idx3];
  ar1 = [];

  return ans;
}



function solution(array, commands) {
  var answer = [];
  let arcp;
  let ans;
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  arcp = array.slice();

  for (let i = 0; i < commands.length; i++) {
    idx1 = commands[i][0]-1;
    idx2 = commands[i][1];
    idx3 = commands[i][2]-1;

    ans = Sort(idx1, idx2, idx3, arcp);
    arcp = array.slice();
    answer.push(ans);
  }

  return answer;
}
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(array, commands));
