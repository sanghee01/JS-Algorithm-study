function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length; i++) {
    j = i;
    while (answer[j] < answer[j - 1]) {
      [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
      j -= 1;
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
