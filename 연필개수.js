function divpen(a){

    let ans;

    if (a <= 12)
        ans = 1;
    else if(a > 12)
        ans = Math.ceil(a/12); //ceil은 나머지가 있을 경우 한자리 증가, floor, 
    return ans;
}
console.log(divpen(12));