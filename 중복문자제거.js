// function deleteduple(str){
//     let ans ="";
//     for (let i = 0; i<str.length; i++){
//         if(str.indexOf(str[i]) == i){ //indexof(s) str안에서 처음 발견되는 s를 출력함
//             ans += str[i];
//         }
//     }
//     return ans;
// }

function deleteduple(str){
    let ans ="";
    let idx = 0;

    for (let i = 0; i<str.length; i++){
        if (ans[idx] == str[i]){
            i++;
            idx++;
        }
        else{
            ans += str[i];
        }
        }
    return ans;
}

let str = "ksekkset";
console.log(deleteduple(str));