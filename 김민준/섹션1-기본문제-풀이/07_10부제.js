/**
 * 날짜의 일이자리와 자동차 번호의 끝 두자리 숫자가 담긴 배열을 받아,  
 * 10부제를 위반하는 차량의 대수를 반환하는 함수
 * 
 * @param {number} n 
 * @param {number[]} arr 
 * @return {number}
 */
function solution(n, arr) {
  let answer = 0;

  for(let i=0; i<arr.length; i+=1) {
    if(arr[i] % 10 === n) answer += 1;
  }

  return answer;
}

const n = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];
const result = solution(n, arr);
console.log(result);