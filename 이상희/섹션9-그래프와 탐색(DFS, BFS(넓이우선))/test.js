function solution(n, arr) {
  let answer = 0;
  let path = [];
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for ([a, b] of arr) {
    graph[a][b] = 1;
  }
  console.log(graph);

  function DFS(v) {
    // 종착점
    if (v === n) {
      answer++;
      console.log("path:" + path);
    } else {
      // 가지 뻗기
      for (let i = 1; i <= n; i++) {
        // v에서 i라는 정점에 갈 수 있느냐, 글고 방문하지 않은 곳이냐
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop(i);
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;
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
