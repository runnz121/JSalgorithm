function IronStick(a){
    let ar1 = [];
    let count = 0;
    let sum = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] === '('){
            ar1.push(a[i]);
            count++;
        }
        else{
            ar1.pop();
            if(a[i-1] === '('){ //이때 레이저가 가동
                sum += ar1.length;
                // console.log(count+ '-');
                // console.log(ar1.length);
            }
            else{
                sum += 1;
            }
        }
    }
    return sum;
}
let a = "() (((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";
console.log(IronStick(a));
//쇠막대기가 끝나는 경우 >>    )(    이렇게 됬을 경우
//레이저가 생성되는 경우 >>    ()    이렇게 됬을 경우