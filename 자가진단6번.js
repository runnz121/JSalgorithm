function sol(arr){
    let answer = [];

    const result = arr.reduce((accu, curr) => {
        accu.set(curr, (accu.get(curr)||0)+1);
        return accu;
    }, new Map());

    for(let [key, value] of result.entries()){ //entries(key, value쌍으로 배열 반환)
        if(value>1) answer.push(value);
    }

    if(answer.length === 0){
        return -1;
    }
    return answer;
}



//let arr = [1,2,3,3,3,3,4,4];//4,2
//let arr = [3,2,4,4,2,5,2,5,5]; // 3,2,3
let arr = [3,5,7,9,1];//-1
console.log(sol(arr));


/////////////////////해설 답안1 ////////////////////////////////

function countOf(arr, value){
    let count = 0;
    arr.forEach(element => {
        if(element === value) {
            count++;
        }
    });
    return count;
}

function solution(arr){
    let answer = [];
    let set = new Set([]);
    arr.forEach(element => {
        if(set.has(element)) return;
        set.add(element);
        count = countOf(arr, element);
        if(count > 1) answer.push(count);
    });
    if(answer.lenght === 0) answer.push(-1);
    return answer;
}
/////////////////////해설 답안2 ////////////////////////////////
function solution(arr){
    let answer = [];
    let map = new Map(); //key에 대한 값을 보관 키값이 이미 있으면 그 val에 +1 없으면 key value새로 저장
    arr.forEach(element => {
        if(map has(element)){
            map.set(element, map.get(element) +1 );
        }
        else {
            map.set(element, 1);
        }
    });
    map.forEach((value) => {
        if(value > 1){
            answer.push(value);
        }
    });
    if(answer.lenght === 0) answer.push(-1);
    return answer;
}