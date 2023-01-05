/**
 * 대문자 찾기
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
 */

// 정규식을 통한 풀이
function solution(str) {
  let uppercaseReg = /[A-Z]/g;
  return str.match(uppercaseReg).length;
}
  
let str = 'KoreaTimeGood';
console.log(solution(str)); // 3
  
// 대문자 아스키코드는 65~90 까지
function solution(str) {
  let answer = 0;
  for (let s of str) {
    let char = s.charCodeAt();
    if (65 <= char && char <= 90) {
      answer += 1;
    }
  }
  return answer;
}
  
let str = 'KoreaTimeGood';
console.log(solution(str)); // 3


// 정답지 풀이
function solution(s){         
    let answer=0;
    for(let x of s){
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if(x===x.toUpperCase()) answer++; 
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));