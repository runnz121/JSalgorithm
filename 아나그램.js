function Ana(a,b){
    let ans = "YES";
    let count = 0;
    let map1 = new Map();

    for (let i = 0; i < a.length; i++) {
        map1.set(a[i], count); //map 에 key, value로 저장
    }
   
    for(let x of a){
        if(map1.has(x)){
         map1.set(x, map1.get(x)+1)
        }
    }
    
    for(let y of b){
        if(!map1.has(y) || map1.get(y) == 0){
            ans = "NO";
        }  
    }

     return ans;

}
let a = "AbaAeCe";
let b = "baeeACA";

console.log(Ana(a,b))