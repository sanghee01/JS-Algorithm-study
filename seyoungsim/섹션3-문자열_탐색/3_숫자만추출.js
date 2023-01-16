/* 숫자만 추출
 *
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
 * 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.
 * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 */

function solution(str) {
  return Number(str.replace(/[^0-9]/g, ""));
}

let str = "g0en2T0s8eSoft"; // 208
// let str = 'tge0a1h205er'; // 1205
console.log(solution(str));

//--------
//--------
// 정답지 풀이. isNaN 으로 해결. 공식사이트에서는 isNaN보다는, Number.isNaN을 사용하여 엄격하게 비교하라고 권고.
// function solution(str){
//   let answer="";
//   for(let x of str){
//       if(!isNaN(x)) answer+=x;
//   }
//   return parseInt(answer);
// }

// let str="g0en2T0s8eSoft";
// console.log(solution(str));
