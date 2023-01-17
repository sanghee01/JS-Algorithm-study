/**
 * 문자열 압축
 *
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로
 * 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.
 */

function solution(str) {
  const strSet = new Set(str);

  return [...strSet]
    .map((s) => {
      const reg = new RegExp(`${s}+`, "ig");
      const [matchStr] = str.match(reg);

      const matchLength = [...matchStr].length;
      return matchLength > 1 ? `${s}${matchLength}` : s;
    })
    .join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str)); // K2HS7E

//-------------------------------------------------------------
//-------------------------------------------------------------
// 정답지 풀이
// function solution(s){
//     let answer="";
//     let cnt=1;
//     s=s+" ";
//     for(let i=0; i<s.length-1; i++){
//         if(s[i]===s[i+1]) cnt++;
//         else{
//             answer+=s[i];
//             if(cnt>1) answer+=String(cnt);
//             cnt=1;
//         }
//     }
//     return answer;
// }

// let str="KKHSSSSSSSE";
// console.log(solution(str));
