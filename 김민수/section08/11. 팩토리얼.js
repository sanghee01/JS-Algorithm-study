function solution(n){
  let total = 1;
  function dfs(n){
    if(n == 1) return
    else{
      dfs(n - 1);
      total *= n;
    }
  }
  dfs(n);
  return total
}

console.log(solution(5)); // 120