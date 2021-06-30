function solution(record) {
  let answer = [];
  let ar1 = [];
  let type = ["Enter", "Leave", "Change"];
  ar1 = record.split(" ");
  console.log(ar1);
  for(let i = 0 ; i < record.length; i++){
      
  }
 



  return answer;
}


let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]; //["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
console.log(solution(record));