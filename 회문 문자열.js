function SearchStr(arr){
    let ans = "YES";
    let tolow = arr.toLowerCase();
    for(let i = 0; i <arr.length; i++){
        if(tolow[i] != tolow[arr.length - 1- i]){
            ans = "NO";
        }
    }
    return ans;
}
let str ="goofG";
console.log(SearchStr(str));
