function solution(arr) {
  let answer = arr;
  let j;
  for (let i = 1; i < answer.length; i++) {
    j = i;
    console.log(answer[i] < answer[i - 1]);
    while (answer[j] < answer[j - 1]) {
      [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
      j -= 1;
    }
  }
  return answer;
}

function solution2(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // x가 같을때 y기준 오름차순
    else return a[0] - b[0]; // x가 다르면 x기준 오름차순
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
