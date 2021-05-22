function min (a,b,c)
{
let ans;

if(a < b)
    ans = a;
else
    ans = b;
if(c < ans)
    ans = c;
return ans;
}

console.log(min(2,5,1));