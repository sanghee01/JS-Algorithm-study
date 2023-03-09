function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // m개 뽑으므로

  // L: m중 for문
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 새로 생성해야하므로 깊은 복사
    } else {
      // 1부터 n개까지 가질 수 있으므로
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
