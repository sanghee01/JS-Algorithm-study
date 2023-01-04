/**
 * 일곱 난쟁이
 * 두명이 더 추가된 9명의 난쟁이가 본인들이 일곱 난쟁이라 주장.
 * 7명의 키의 합이 100이다. 100이 맞는 7명의 난쟁이의 키를 입력된 순서대로 출력하자.
 */

// 처음 푼 값. 맨 마지막의 4명의 난쟁이 중에서 2명만 거른다는 생각으로 풀었다.
// 결과적으로 앞에 있는 난쟁이들은 정답이라는 오류를 만들게 됌.
function solution(arr) {
  let answer = arr.slice(0, 5);
  
  let sum = arr.slice(0, 5).reduce((a, c) => a + c, 0);
  const lasts = arr.slice(5);
  
  for (let i = 0; i < 3; i += 1) {
    for (let j = i + 1; j < 4; j += 1) {
      if (sum + (lasts[i] + lasts[j]) === 100) {
        answer.push(lasts[i], lasts[j]);
    }
  }
  
  return answer;
}
  
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
  
// 정답지. 9명의 난쟁이 키의 합을 먼저 구한 후, 2명의 난쟁이 키의 합을 뺐을 때, 100이 되면 해당 난쟁이들을 제거하는 방식.
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
  
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));