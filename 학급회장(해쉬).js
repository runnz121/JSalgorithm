function CB(str){
    let map = new Map(); //key , value => 학생 인덱스, ABCDE후보
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let ans;

    for(let i = 0; i < str.length; i++){
        map.set(str[i], count); //map 에 key, value로 저장
    }

    for(let x of str){
        if(map.has(x)){
            map.set(x, map.get(x)+1); //value값을 get으로 접근, 직접 접근은 불가
        }
        else{
            map.set(x,1);
        }
    }
    
    for(let [key,value] of map){
        if(value > max){
            max = value;
            ans = key;
        }
    }
    return ans;  


}
let str = "BACBACCACCBDEDE";
console.log(CB(str));