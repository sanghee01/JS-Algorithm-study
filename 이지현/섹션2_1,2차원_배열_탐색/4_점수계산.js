function solution(arr) {
  let answer = 0;
  let count = 0;
  arr.forEach((e) => {
    if (e === 1) {
      count += 1;
      answer += count;
    } else {
      count = 0;
    }
  });

  return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
