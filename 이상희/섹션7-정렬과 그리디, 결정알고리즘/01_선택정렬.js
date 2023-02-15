function solution(arr) {
  let answer = arr;
  let min, index;

  for (let i = 0; i < answer.length; i++) {
    min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < answer.length; j++) {
      if (min > answer[j]) {
        min = answer[j];
        index = j;
      }
    }
    [answer[i], answer[index]] = [min, answer[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
