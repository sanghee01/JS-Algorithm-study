// 1. 대소문자를 구분안함
// 2. 알파벳 이외의 문자들의 무시
// 3. 100을 넘지 않는 공백이 없는 문자열

function solution(str){
  let nStr = str.toUpperCase().replace(/[^A-Z]/g, '');
  for(let i = 0; i < parseInt(nStr.length/2); i++){
    if(nStr[i] != nStr[nStr.length-1-i]) return "NO";
  }
  return "YES";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"),"YES");