function Makemap(a){
    let map = new Map();
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      map.set(a[i], count);
    }
    for (let x of a) {
      if (map.has(x)) map.set(x, map.get(x) + 1);
    }
    return map;
}

function FAAna(a,b){
    let map1;
    let map2;
    map1 = Makemap(a);
    map2 = Makemap(b);
    
 
    console.log(map1);
    console.log(map2);




}
let a = "bacaAacba";
let b = "abc";
console.log(FAAna(a,b));