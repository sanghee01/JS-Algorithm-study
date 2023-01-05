/* 
  삼각형이 되기 위한 조건 : 가장 긴 변이 나머지 두 변의 합보다 작아야 한다.
*/
function solution(a, b, c) {
  let answer = '';
  let max = 0;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max > max) answer = 'YES';
  else answer = 'NO';

  return answer;
}

function solution2(a, b, c) {
  let answer = '';
  let max = 0;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  // 삼항연산자 이용
  answer = sum - max > max ? 'YES' : 'NO';

  return answer;
}

function solution3(a, b, c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;

  answer = sum - max > max ? 'YES' : 'NO';

  return answer;
}

const [a, b, c] = [6, 7, 11];
const result = solution(a, b, c);
console.log(result);
