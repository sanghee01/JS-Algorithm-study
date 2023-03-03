function solution(n) {
  const arr = [];

  function dfs(index, current) {
    if (index === n + 1) {
      arr.push(current);
      return;
    }
    dfs(index + 1, [...current, index]); // index번째 원소를 선택한 경우
    dfs(index + 1, current); // index번째 원소를 선택하지 않은 경우
  }
  dfs(1, []);
  return arr;
}

console.log(solution(3)); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// 해석

// dfs(1, []);
//   dfs(2, [1])
//     dfs(3, [1,2])
//       dfs(4, [1,2,3]) => arr = [[1,2,3]]
//       dfs(4, [1,2]) => arr = [[1,2,3], [1,2]]
//     dfs(3, [1])
//       dfs(4, [1,3]) => arr = [[1,2,3],[1,2],[1,3]]
//       dfs(4, [1]) => arr = [[1,2,3],[1,2],[1,3],[3]]
//   dfs(2, [])
//     dfs(3, [2])
//       dfs(4, [2,3]) => arr = [[1,2,3],[1,2],[1,3],[3],[2,3]]
//       dfs(4, [2]) => arr = [[1,2,3],[1,2],[1,3],[3],[2,3],[2]]
//     dfs(3, [])
//       dfs(4, [3]) => arr = [[1,2,3],[1,2],[1,3],[3],[2,3],[2],[3]]
//       dfs(4, [])

