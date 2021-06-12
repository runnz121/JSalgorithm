function Min(){
    let idx = 0;

    for(i = 0; i < arguments.length; i++){
       for(j = 0; j < arguments.length; j++){
           if(arguments[j] > arguments[j+1]){
               idx = arguments[j];
               arguments[j] = arguments[j+1];
               arguments[j+1] =idx;
           }
       }
    }
    return arguments[0];
};

console.log(Min(3,5,6,7,2,8,9,4));

//https://nkcnow.tistory.com/35

//Number.MAX_SAFE_INTEGER : 가장큰 정수 자동 지정
//Math.min(...arr) : 배열내 최소값 지정
//Math.min.apply(null, arr):첫번째 인자는객체, 두번째 인자는 배열(배열의 최소값 구하는 또다른 방법)