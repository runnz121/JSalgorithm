function buje(a, arr){

    let count = 0;

    for(let i of arr){
        if(i%10 == a){
            count++;
        }
    }
    return count;
} 
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(buje(3, arr))