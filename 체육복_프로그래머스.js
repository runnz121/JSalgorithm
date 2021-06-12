function solution(n, lost, reserve) {
    //let difference = arr1.filter(x => !arr2.includes(x)); //출처: https://88240.tistory.com/519 [shaking blog]
    let count = 0;
    let ar1 = [];
    let idx= 0;
    let sum = 0;
    let idx1 = 0;
    let idx2= 0;
    let lost1 = lost.filter(x => !reserve.includes(x));
    let reserve1 = reserve.filter(y => !lost.includes(y));
    let answer = 0;
    let len = lost.length;
    lost = lost1.sort((a,b) => a-b);
    reserve = reserve1.sort((a,b) => a-b);
    ar1 = lost.concat(reserve);
    ar1 = ar1.sort((a,b)=>a-b);

    for(let i = 0; i < lost.length; i++){
        for(let j = 0; j < reserve.length; j++){
            if(lost[i] === reserve[j]+1 || lost[i] === reserve[j]-1){
                count++; 
            }
            for(let k = 0; k < ar1.length; k++){
                if(lost[i] === )

            }
            }
        }
    }
    console.log(count);
    answer = n - len+ sum;
    return answer;
}

//리턴값 : n - lost.length + 빌린 수만큼;


// 1이 2를 빌려줌 // 3이 2를 빌려줌
// 3이 4를 빌려줌 // 5가 4를 빌려줌
// 5는 아무도 안빌려줌 //1은 아무도 안빌려줌
let n = 5;
let lost = [2,4];       //y
let reserve = [1,3,5]; //x
//let reserve = [3];
console.log(solution(n,lost,reserve));