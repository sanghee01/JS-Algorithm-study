/**
 * 1부터 N까지 합 출력하기
 * 6이라는 N 값이 들어오면, 1 + 2 + 3 + 4 + 5 + 6 = 21 
 * 21이라는 합이 반환되어야한다.
 */
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}
  
console.log(solution(10));
  