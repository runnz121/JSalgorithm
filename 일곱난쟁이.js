function dwarf(arr){

    let ans = arr; //얕은 복사
    let sum = arr.reduce((a, b)=> a+b, 0); // 누적합 구하기 (a,b를 인자로 받아 a+b실행) ,a에다가 b의 값을 계속 더해서 누적
    for (let i = 0; i < 8; i++){
        for (let j = i+1; j<9; j++){ //이중 for문 돌면서 두개씩 뺌
            if((sum-(ans[i]+ans[j]))==100){ //총합에서 두개의 인덱스를 뺀 것이 100일 경우
                arr.splice(j, 1); //j번째 인덱스가 제거 >>j부터 지워야 됨 왜냐하면 j = i+1인데 앞의 인덱스를 먼저 지울 경우 앞으로 당겨지기 때문
                arr.splice(i, 1); //i번째 인덱스제거
            }
        }
    }

    return ans;
}

let arr= [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(dwarf(arr));