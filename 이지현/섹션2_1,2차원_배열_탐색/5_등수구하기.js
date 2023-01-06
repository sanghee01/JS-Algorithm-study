/* eslint-disable prettier/prettier */
function solution(arr) {
  let rank = 1;
  const sorted = [...arr]; // arr.sort()하면 기존 배열을 바꿔버림
  const answer = [];

  // 100 82 89 87 76
  //  87 89 92 100 76
  const sortedArr = sorted.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i += 1) {
    rank = sortedArr.indexOf(arr[i]) + 1;
    answer.push(rank);
  }
  return answer;
}

const a = [87, 89, 92, 100, 76]; // [ 4, 3, 2, 1, 5 ]
const b = [95, 95, 87, 76, 100]; // [ 2, 2, 4, 5, 1 ]

console.log(solution(a));
console.log(solution(b));
