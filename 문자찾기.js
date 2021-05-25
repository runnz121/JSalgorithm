function FindChar(str,char){

    let count= 0;

    for(let x of str){
        if(x == char){
            count++;
        }
    }
    return count;
}

let str = "COMPUTERPROGRAMMING";
let char = "R";
console.log(FindChar(str,char))