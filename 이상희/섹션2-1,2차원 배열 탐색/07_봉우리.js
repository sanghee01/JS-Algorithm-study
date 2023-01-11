function solution(arr) {
  let answer = 0;
  let N = arr.length;
  let array = Array.from(Array(N + 2), () => Array(N + 2).fill(0));

  // 격자판 세팅
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      array[i][j] = arr[i - 1][j - 1];
    }
  }

  // 봉우리 찾기
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (
        array[i][j] > array[i - 1][j] &&
        array[i][j] > array[i][j - 1] &&
        array[i][j] > array[i + 1][j] &&
        array[i][j] > array[i][j + 1]
      ) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
