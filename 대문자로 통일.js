function ToUpper(str){

    let ans ="";


    for (let x of str) {
        if ((x.charCodeAt(x) >= 97) && (x.charCodeAt(x) <= 122)) {
          ans += String.fromCharCode(x.charCodeAt(x) - 32);
        }
        else
        {
          ans += String.fromCharCode(x.charCodeAt(x));
        }
    }
    return ans;

}

let str = "ItisTimeToStudy";
console.log(ToUpper(str));