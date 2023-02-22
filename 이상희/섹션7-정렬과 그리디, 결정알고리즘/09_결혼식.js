function solution(times) {
  let answer = 0;
  let count;
  let endtime = times[0][1];

  // 시작 시간 오름차순 정렬
  times.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  // 첫번째 참석자 지정
  for (let i = 0; i < times.length; i++) {
    count = 1;
    // 첫번째 참석자 시간의 끝나는 시간이 뒷 참석자 시작시간보다 크다면 동시 존재
    for (let j = i; j < times.length - 1; j++) {
      if (times[i][1] > times[j + 1][0]) {
        count += 1;
        endtime = times[j + 1][1];
      }
    }
    if (count > answer) answer = count;
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
