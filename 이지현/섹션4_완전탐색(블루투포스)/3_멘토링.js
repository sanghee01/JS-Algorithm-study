function solution(N, M, arr) {
  let answer = 0;
  for (let i = 1; i <= N; i += 1) { // i 멘티 
    for (let j = 1; j <= N; j += 1 ) { // j 멘티
      let testCnt = 0;
      for (let k = 0; k < M; k += 1) { // 테스트 회차
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < N; s += 1 ) { // 테스트 결과 등수
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) testCnt++
      }
      if (testCnt === M) answer++
    } 
  }
  return answer;
}

const N = 4; // 학생수
const M = 3; // 수학테스트 횟수
const resultArr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
]
console.log(solution(N, M, resultArr));