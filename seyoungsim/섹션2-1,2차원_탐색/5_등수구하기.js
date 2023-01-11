/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 * 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
 */

function solution(array) {
  let count = 0;

  const rankMap = [...array]
    .sort((a, b) => b - a)
    .reduce((accu, curr) => {
      accu.set(curr, (accu.get(curr) || 0) + 1);
      return accu;
    }, new Map());

  for (const [key, value] of rankMap) {
    rankMap.set(key, count + 1);
    count += value;
  }

  return array.map((num) => rankMap.get(num));
}

let arr = [87, 89, 92, 100, 76]; // [ 4, 3, 2, 1, 5 ]
// let arr = [87, 89, 92, 100, 76, 87, 89]; // [ 5, 3, 2, 1, 7, 5, 3]

console.log(solution(arr));

// 정답지의 풀이. 이중포문으로,등수를 구하고자 하는 값보다 더 큰 값들을 비교하며 등수를 더해가며 구함.
// function solution(arr) {
//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }

// let arr = [87, 89, 92, 100, 76];
// console.log(solution(arr));
