function solution(n) {
  const subsets = [];

  function dfs(index, current) {
    if (index === n + 1) {
      subsets.push(current);
      return;
    }
    dfs(index + 1, [...current, index]); // index번째 원소를 선택한 경우
    dfs(index + 1, current); // index번째 원소를 선택하지 않은 경우
  }
  dfs(1, []);
  return subsets;
}

console.log(solution(3)); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
