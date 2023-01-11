function solution(array) {
  let answer = 0,
    cnt = 0;

  array.map((num) => {
    if (num === 1) {
      cnt += 1;
      answer += cnt;
    } else {
      cnt = 0;
    }
  });
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

