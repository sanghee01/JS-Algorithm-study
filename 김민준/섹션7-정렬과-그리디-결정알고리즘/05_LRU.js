function solution(S, N, NUMBER_LIST) {
  let cache = Array.from({ length: S }, () => 0);

  let cur = 0;
  let idx = 0;
  for (let i = 0; i < N; i += 1) {
    cur = NUMBER_LIST[i];

    // HIT
    if ((idx = cache.indexOf(cur)) >= 0) {
      cache.splice(idx, 1);
      cache.unshift(cur);
    }
    // MISS
    else {
      cache.unshift(cur);
      cache.pop();
    }
  }

  return cache;
}

const [S, N] = [5, 9];
const NUMBER_LIST = [1, 2, 3, 2, 6, 2, 3, 5, 7];
const ANSWER = solution(S, N, NUMBER_LIST);
console.log(ANSWER);
