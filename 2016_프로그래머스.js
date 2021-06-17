function solution(a, b) {
    var answer = '';
    let date = ["FRI","SAT","SUN","MON","TUE","WED","THU"]; //fri
    let day =[31,29,31,30,31,30,31,31,30,31,30,31];
    let daysum = 0;
    
    for(let i = 0; i < a-1; i++){
        daysum += day[i];
    }
    daysum += b;

    if((daysum%7 -1) == -1){
        daysum = 6;
    }else{
        daysum = daysum%7-1;
    }
    answer = date[daysum];

    return answer;
}
console.log(solution(5,24));