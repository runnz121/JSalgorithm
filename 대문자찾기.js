function FindCapital(str){
    let count = 0;

    for(let x of str){
        if ((x.charCodeAt(x) >= 65) && (x.charCodeAt(x) <= 90)) { //문자열을 받는게 아니고 문자가 와야됨 문자.charCodeAt()
          count++;
        }
    }
    return count;
}

let str = "KoreaTimeGood";
console.log(FindCapital(str));