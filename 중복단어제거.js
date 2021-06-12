// function deleteduplechar(str){
//     let ans;

//     ans = str.filter((j,i) => { //조건에 만족하는 값들만 받아서 새로운 배열을 리턴 (j = "good, time, student..." i ="각 단언의 x번 인덱스.. 라는 뜻")
        
//         if(str.indexOf(j) == i)

//         return i;
//     })

//     return ans;
// }

function deleteduplechar(str){
    let ans = [];
    ans.push(str[0]);
    let flag = 0;

    for (let i = 0; i <str.length; i++){
        for (let j = 0; j < str[i].length; j++){
            if(ans[i][j] == str[i][j]){
                flag = 1;
                if (flag == 1){
                    i++;
                }
                else{
                    ans.push(str[i]);
                }
            }
        }
    }
    return ans;
}

let str = ["good", "time", "good", "time", "student"];
console.log(deleteduplechar(str));