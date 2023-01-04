/**
 * 연필 개수
 * 연필을 나눠줄 학생수가 25명이면, 연필 3 다스(26자루)가 필요하다. 25자루 나눠준 후 1자루가 남는다.
 * 몫을 구한 후, 나머지가 1이상일 경우 한 다스를 더 필요한 것으로 구했다.
 */
function solution(n) {
  let answer;
  const aDozenPencils = 12;
  
  answer = parseInt(n / aDozenPencils);
  if (n % aDozenPencils > 0) answer += 1;
  
  return answer;
}
  
console.log(solution(178));

// js의 Math.ceil 로 반올림하여 구하면 쉽게 구하는 것이었다. 몫과 나머지 값에 너무 집중한 나머지 올림을 기억하지 못했다.