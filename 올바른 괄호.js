function RightBracket(a){
    let ans = "NO";
    let idx = -1;
    let count = 0;
    let ar1 = [];
    let i = 0;

    //pop()할시 중복 된 원소는 한개만 빼는걸로 나옴;
    for(x of a){
        if(x === '('){
            ar1.push(x);
            idx = 1;
            count += idx;
        }
        else{
            ar1.push(x);
            idx = -1;
            count += idx;
        }
    }
    idx = 0;
    if(ar1.pop() !== ar1[0]){
        idx = 0;
    }

    //괄호 갯수와 처음 인자와 마지막 인자의 괄호가 서로 다른 경우
    if(count === 0 && idx === 0 ){
        ans ="YES"
    }


return ans;
}
let a = "(()(()))(()";
console.log(RightBracket(a));