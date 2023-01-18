/**
 * 가장 짧은 문자거리
 *
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 *
 * 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.문자열의 길이는 100을 넘지 않는다.
 * 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 */

function solution(str, char) {
  const charIndexs = []; // 1, 5 ,10

  [...str].map((s, i) => {
    if (s === char) charIndexs.push(i);
  });

  // 왼쪽 오른쪽 특정 문자가 있는가.
  // 왼쪽만 있거나 오른쪽만 특정 문자가 있는가.
  const answer = [...str].map((_, index) => {
    if (charIndexs.includes(index)) return 0;

    let leftCharIndex =
      [...charIndexs].reverse().find((charIndex) => charIndex < index) || 1000;
    let rightCharIndex =
      charIndexs.find((charIndex) => index < charIndex) || 1000;

    return Math.min(
      Math.abs(leftCharIndex - index),
      Math.abs(rightCharIndex - index)
    );
  });

  return answer.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e")); // 1 0 1 2 1 0 1 2 2 1 0

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// 정답지 풀이
// function solution(s, t) {
//   let answer = [];
//   let p = 1000;
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }

// let str = "teachermode";
// console.log(solution(str, "e"));
