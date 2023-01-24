function solution(test) {
  let answer = 0;
  let cnt = 0;
  const N = test[0].length;

  for (let mentor = 1; mentor <= N; mentor++) {
    for (let menti = 1; menti <= N; menti++) {
      cnt = 0;
      for (let i = 0; i < test.length; i++) {
        if (test[i].indexOf(mentor) < test[i].indexOf(menti)) cnt++;
      }
      if (cnt === test.length) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
