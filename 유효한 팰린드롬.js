function VF(arr){
    let ans = "YES";
    let ar1 = "";
    let ar2 = "";
    let tolow = arr.toLowerCase();
 
    for(let i = 0; i < arr.length; i++){
            if (tolow[i] >= "a" && "z" >= tolow[i]) {
              ar1 += tolow[i];
              ar2 += tolow[i];
         }
    }
    console.log(ar1);

    for(let j = 0; j <ar1.length; j++){
        if(ar1.split("").reverse().join("") !== ar2){
            ans ="NO";
        }
    }
    console.log(ar1);

    return ans;
}

 
let arr = "found7, time: study; Yduts; emit, 7Dnuof";    
 console.log(VF(arr));


