function diff(a,b,c)
{
    let ans;
    let max;

    if (a + b > c){
        if(a > b){
            max = a;
        }
        else {
            max = b;
        }
    }
    else{
        max = c;
    }
    if (a+b+c - max <= max)
    ans = "NO";
    else
    ans = "YES";
    return ans;
}
    console.log(diff(6,7,11));
    