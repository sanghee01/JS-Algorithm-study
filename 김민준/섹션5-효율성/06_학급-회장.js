function solution(N, markList) {
  let votedCountMap = new Map();

  markList.split('').forEach((mark) => {
    votedCountMap.set(mark, votedCountMap.get(mark) + 1 || 1);
  });

  let result = '';
  let max = 0;
  for (const [CANDIDATE, VOTED_COUNT] of votedCountMap) {
    if (VOTED_COUNT > max) {
      max = VOTED_COUNT;
      result = CANDIDATE;
    }
  }

  return result;
}

const N = 15;
const markList = 'BACBACCACCBDEDE';

const ANSWER = solution(N, markList);
console.log(ANSWER);
