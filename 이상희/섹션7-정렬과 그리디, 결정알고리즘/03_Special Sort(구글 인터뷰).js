function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        if (answer[j] > 0 && answer[j + 1] < 0) {
          [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
        }
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
