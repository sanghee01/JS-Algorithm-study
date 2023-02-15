function solution(meeting) {
  let answer = 1;
  let count, afterStart, end;

  // 시작하는 시간 기준으로 정렬
  meeting.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  for (let i = 0; i < meeting.length; i++) {
    end = meeting[i][1];
    count = 1;
    for (let j = i; j < meeting.length - 1; j++) {
      afterStart = meeting[j + 1][0];
      if (afterStart >= end) {
        count++;
        end = meeting[j + 1][1];
      }
    }
    if (count > answer) answer = count;
  }

  return answer;
}

// 강사 풀이
function solution2(meeting) {
  let answer = 0;
  // 끝나는 시간 기준으로 정렬
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let endtime = 0;
  for (let x of meeting) {
    if (x[0] >= endtime) {
      answer++;
      endtime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
