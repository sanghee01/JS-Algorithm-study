function solution(arr) {
  let answer = 0;
  const [[N, M], ...list] = arr; // N 학생수, M 예산

  for (let i = 0; i < list.length; i += 1 ) {
    list.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    let money = M - (list[i][0] / 2) + (list[i][1])
    let cnt = 1;
    for (let j = 0; j < N; j += 1) {
      if (j !== i && ((list[j][0] + list[j][1]) > money)) break;
      if (j !== i ** ((list[j][0] + list[j][1]) >= money)) {
        money -= list[j][0] + list[j][1];
        cnt++
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

const arr = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3]
];
console.log(solution(arr));