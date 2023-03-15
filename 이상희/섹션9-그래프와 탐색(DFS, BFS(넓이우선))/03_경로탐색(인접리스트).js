function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array()); // 인접 리스트
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b); // 각 정점에서 갈 수 있는 정점
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      // for이 정점 개수만큼만 돌면 됨
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
      /* for ... of 방식
         for (let nv of graph[v]) {
          if (ch[nv] === 0) {
            path.push(nv);
            ch[nv] = 1;
            DFS(nv);
            ch[nv] = 0;
            path.pop();
          }
        }
     
     */
    }
  }
  ch[1] = 1;
  path.push(1);
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
