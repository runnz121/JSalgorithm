중복 제거 : https://hianna.tistory.com/459?category=764998
//set 이용
const dupArr = [1, 2, 3, 1, 2];

const set = new Set(dupArr);

const uniqueArr = [...set];

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);

//indexOf(),filter()
const dupArr = [1, 2, 3, 1, 2];

const uniqueArr = dupArr.filter((element, index) => {
    return dupArr.indexOf(element) === index;
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);

//forEach(), includes()
const dupArr = [1, 2, 3, 1, 2];

let uniqueArr = [];
dupArr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
});

document.writeln(Array.isArray(uniqueArr));
document.writeln(uniqueArr);



중복 세기 :

//const obj = JSON.parse(json); => 이 함수를 이용해서 json을 문자열로 변환

//forEach()이용
const arr = ['a', 'b', 'a', 'b', 'c'];

const result = {};
arr.forEach((x) => { 
  result[x] = (result[x] || 0)+1; 
});


// 이거랑 같은 코드 => if(result[x]) {
                    // result[x] = result[x] + 1;
                    // }else {
                    // result[x] = 0 + 1;
                    // }


출처: https://hianna.tistory.com/459?category=764998 [어제 오늘 내일]

document.write(JSON.stringify(result));

//reduce()이용하기
const arr = ['a', 'b', 'a', 'b', 'c'];

const result = arr.reduce((accu, curr) => { 
  accu[curr] = (accu[curr] || 0)+1; 
  return accu;
}, {});

document.write(JSON.stringify(result));


//map 객체 이용하기
const arr = ['a', 'b', 'a', 'b', 'c'];

const result = arr.reduce((accu,curr)=> {
  accu.set(curr, (accu.get(curr)||0) +1) ;
  return accu;
},new Map());

for (let [key, value] of result.entries()) {
  document.write(key + ' : ' + value + '<br>');
}