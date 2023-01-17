function solution(str, element){
    let answer = [];
    let p = 100;

    for (x of str) {
    	if (x === element){
        	p = 0;
            answer.push(p);
        } else {
        	p++;
            answer.push(p);
        }
    }

    p = 100;
    for (let i = str.length - 1; i >= 0;  i--){
    	if (str[i] === element){
        	p = 0;
        } else {
        	p++;
            answer[i] = Math.min(answer[i], p);
        }
     }
     return answer;
}
  
let str = "teachermode";
console.log(solution(str, 'e'));