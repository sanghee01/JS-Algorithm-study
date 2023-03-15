function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 인접행렬
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열
  let path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1; // 1이면 a에서 b 정점으로 갈 수 있음
  }

  function DFS(v) {
    if (v === n) {
      // 종착점
      answer++;
      console.log(path);
    } else {
      // 가지 뻗기
      for (let i = 1; i <= n; i++) {
        // v에서 i라는 정점에 갈 수 있느냐, 글고 방문하지 않은 곳이냐
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1; // 체크
          path.push(i);
          DFS(i); // v에서 i로 가야하니까 DFS(i)
          // back
          ch[i] = 0; // 체크 풂
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1; // 방문했다고 체크
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
