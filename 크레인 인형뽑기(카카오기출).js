function Kakao(a,b){
    let ar1 = [];
    let ar2 = [];
    let i = -1;
    let count = 0;
    let idx;
    let len = 0;
    let init;

    for(let x of a){
        len = x.length;
        for(let y of x){
            ar1.push(y);
        }
    }

    while(i++ < b.length){
        init = b[i]-1;
        for(let j = init; j < ar1.length; j = j+len){
            idx = ar1[init];
            if(idx === 0){
                    init += len;
                }
            else if(idx !== 0){
                ar2.push(idx);
                ar1.splice(ar1.indexOf(idx),1,0);
                break;
            }         
        }
    }

    idx = 0;
    for (let k = 0; k < ar2.length; k++){
        if(ar2[k] === ar2[k+1]){          
            ar2.splice(ar2.indexOf(ar2[k]),1); //배열이 당겨지기 때문에 같은걸 두번없에 주어야 함.
            ar2.splice(ar2.indexOf(ar2[k]),1);
            count++;
            k = 0;
        }else {
            k++;
        }
    }

    return count*2;
}
 let a = [
   [0, 0, 0, 0, 0], //0
   [0, 0, 1, 0, 3], //1
   [0, 2, 5, 0, 1], //2
   [4, 2, 4, 4, 2], //3
   [3, 5, 1, 3, 1], //4
//  0  1  2  3  4
 ];

 let b = [1, 5, 3, 5, 1, 2, 1, 4]; //-1씩 해주어야 함 ([x][y] => y 쪽)
 //       4  3  1  1  3  2     4

 console.log(Kakao(a,b));


